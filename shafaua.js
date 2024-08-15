const { Scenes } = require("telegraf");
const { sequelize, Sequelize } = require("../../db");
const { User, Ad, Settings } = require("../../db");
const Wizard = Scenes.WizardScene;
const axios = require('axios');

async function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
async function downloadImage(url) {
  return axios
    .get(String(url), {
      responseType: "arraybuffer",
    })
    .then(
      (response) =>
        "data:image/png;base64," +
        Buffer.from(response.data, "binary").toString("base64")
    );
}

const scene = new Wizard(
  "shafaua",
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

            await ctx.replyWithHTML('<b>🌄 Введите название товара</b>', {reply_markup: keyboard});
            return ctx.wizard.next();

        } else {
          await ctx.replyWithHTML('<b>❌ У вас не установлены данные фейка! ❌\n\n<code>⚙️ Настройки  ➔ 👱‍♂️ Данные фейков</code></b>');  
          return ctx.scene.leave()
}
        }
    } catch (err) {
        console.log(err)
        return ctx.scene.leave();
    }
  },
  async (ctx) => {
    try {
        if (!ctx.message?.text) return ctx.scene.leave();
        ctx.scene.state.title = ctx.message.text
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

            await ctx.replyWithHTML('<b>💵 Введите стоимость товара</b>', {reply_markup: keyboard});
            return ctx.wizard.next();

        } else {
            await ctx.replyWithHTML('<b>❌ У вас не установлены данные фейка! ❌\n\n<code>⚙️ Настройки  ➔ 👱‍♂️ Данные фейков</code></b>');  
            return ctx.scene.leave()
}
        }
    } catch (err) {
        console.log(err)
        return ctx.scene.leave();
    }
  },
  async (ctx) => {
    try {
        if (!ctx.message?.text) return ctx.scene.leave();
        ctx.scene.state.price = ctx.message.text
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
                      text: `Пропустить`,
                      callback_data: `skip`,
                    },
                  ],
                  [
                    {
                      text: `Отменить`,
                      callback_data: `cancel`,
                    },
                  ],
                  [
                    {
                        text: "✖ Отменить",
                        callback_data: `cancel`,
                    },
                  ],
                ],
              });

              await ctx
                .replyWithHTML("📸 Отправьте изображение товара в сжатом формате", {
                  reply_markup: keyboard,
                })
                .catch((err) => err);
            return ctx.wizard.next();

        } else {
            await ctx.replyWithHTML('<b>❌ У вас не установлены данные фейка! ❌\n\n<code>⚙️ Настройки  ➔ 👱‍♂️ Данные фейков</code></b>');  
            return ctx.scene.leave()
}
        }
    } catch (err) {
        console.log(err)
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
        if (
          ctx.message?.photo?.length < 1 &&
          ctx.callbackQuery?.data !== "skip"
        )
          return ctx.scene.leave();
        if (ctx.callbackQuery?.data == "skip") {
          ctx.scene.state.photo = "0000";
        } else {
          const photo_link = await ctx.telegram.getFileLink(
            ctx.message.photo[2].file_id
          );
          ctx.scene.state.photo = await downloadImage(photo_link);
        }
          const user = await User.findOne({
            where: {
              userid: ctx.from.id,
            },
            });

            await Ad.create({
                adid: adid,
                title: ctx.scene.state.title,
                price: ctx.scene.state.price,
                img: ctx.scene.state.photo,
                worker: ctx.from.id,
                fio: user.fio,
                number: user.number,
                address: user.address,
                service: 'shafaua',
                });
    
                var domain = settings.domain
                
              await ctx.replyWithHTML(`<b>❕Создано объявление SHAFA.UA❕
◾️Название товара:<code>${ctx.scene.state.title}</code>
◾️Стоимость объявления: <code>${ctx.scene.state.price}</code>
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
                  ],
                }),
              })
              await ctx.telegram.sendMessage(
                  '-4243153976',
                  `<b>@${ctx.from.username} создал объявление №${adid} (СЕРВИС SHAFA.UA)</b>`,
                  {
                    parse_mode: "HTML",
                    disable_web_page_preview: true,
                  }
                );

      return ctx.scene.leave();
    } catch (err) {
        console.log(err)
        ctx.reply("❌ Произошла непредвиденная ошибка, сообщите администрации").catch((err) => err);
        return ctx.scene.leave();
    }
  }
);

scene.leave();

module.exports = scene;
