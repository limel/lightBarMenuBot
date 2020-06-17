require('dotenv').config();
const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const Extra = require('telegraf/extra');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
});

bot.start(ctx =>
  ctx.reply(
    `Здравствуйте ${ctx.message.from.first_name}, мы рады вас приветсвовать в Light Bar! ознакомтьесь с нашим меню`,
    Markup.keyboard([
      ['Первые блюда 🍲', 'Вторые блюда 🥘'],
      ['Салаты 🥗', 'Гриль 🥩'],
      ['Напитки 🍸'],
    ])
      .resize()
      .extra(),
  ),
);

bot.hears('Первые блюда 🍲', ctx =>
  ctx.replyWithPhoto(
    { source: 'firstDish.png' },
    // Extra.caption('Caption *text*').markdown(),
  ),
);
bot.hears('Вторые блюда 🥘', ctx =>
  ctx.replyWithPhoto(
    { source: 'secondDish.png' },
    // Extra.caption('Caption *text*').markdown(),
  ),
);
bot.hears('Салаты 🥗', ctx =>
  ctx.replyWithPhoto(
    { source: 'salats.png' },
    // Extra.caption('Caption *text*').markdown(),
  ),
);
bot.hears('Гриль 🥩', ctx =>
  ctx.replyWithPhoto(
    { source: 'grill.png' },
    // Extra.caption('Caption *text*').markdown(),
  ),
);
bot.hears('Напитки 🍸', ctx =>
  ctx.replyWithPhoto(
    { source: 'drinks.png' },
    // Extra.caption('Caption *text*').markdown(),
  ),
);

bot.launch();

// console.log(Telegraf);

console.log('bot start!');
