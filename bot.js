require('dotenv').config();
const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const Extra = require('telegraf/extra');
const bot = new Telegraf(process.env.BOT_TOKEN);

// const startKeyboard = Markup.inlineKeyboard([
//   // Markup.callbackButton('🔥 Акционое предложение 🔥', 'promotions'),
//   Markup.callbackButton('Наше меню', 'menu'),
//   Markup.callbackButton('Наше контакты', 'contacts'),
// ]);

bot.start(ctx =>
  ctx.replyWithPhoto(
    { source: 'start.png' },
    Extra.load({
      caption:
        "Мы рады Вас приветстовать в Light Bar, для того что бы увидеть наше меню вам достачно нажать 'наше меню'  выбрать что Вы желаете и нажать на кнопку выплывающей клавиатуры у вас на телефоне, под каждой фотографией вы найдете описание и цену ",
    })
      .markdown()
      .markup(m =>
        m.inlineKeyboard([
          m.callbackButton('Наше меню', 'menu'),
          m.callbackButton('Наши контакты', 'contacts'),
        ]),
      ),
  ),
);

// Contacts

bot.action('contacts', ctx => {
  ctx.reply(`Бронь столиков: +380971000369
  Наш instagram: https://www.instagram.com/_light.bar_/
  Как нас найти: https://www.instagram.com/stories/highlights/18038968072178307/`);
});

// Menu

bot.action('menu', ctx => {
  ctx.replyWithPhoto(
    { source: 'menu.png' },

    Markup.keyboard([
      ['Бургер меню 🍔', 'Салаты 🥗'],
      ['Cэндвич роллы 🌯 и суши меню 🍤'],
      ['Фри меню 🍟', 'Десерты 🧁', 'Напитки 🍸'],
      ['Общее меню 📋'],
    ])
      .resize()
      .extra(),
  );
});

// Burger menu

bot.hears('Бургер меню 🍔', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'actionBurger.png' },
      caption:
        'Action burger - говяжья котлета, хамон, сыр чедер, маринованые огурчики, помидор, лук марс, салат айсберг - 350гр - 95грн',
      type: 'photo',
    },
    {
      media: { source: 'burgerChees.png' },
      caption:
        'Бургер Чиз - говяжья котлета, сыр чедер, блюз чиз, маринованые огурчики, помидор, лук марс, салат айсберг - 350гр - 90грн',
      type: 'photo',
    },

    {
      media: { source: 'img/bigChick.png' },
      caption:
        'Чикен Биг - куриная котлета, сыр чедер, маринованые огурчики, помидор, лук марс, салат айсберг - 350гр - 70грн',
      type: 'photo',
    },

    {
      media: { source: 'classicalBurger.png' },
      caption:
        'Классик бургер - говяжья котлета, двойной сыр чедер, маринованые огурчики, лук марс - 350гр - 85грн',
      type: 'photo',
    },
  ]);
});

// Salad menu

bot.hears('Салаты 🥗', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'img/greek.png' },
      caption:
        'Греческий -Томаты, огурец, лук марс, сыр фета, маслины, перец болгарский - 200гр - 58грн',
      type: 'photo',
    },
    {
      media: { source: 'img/bavarSalad.png' },
      caption:
        'Баварский - Микс салат,баварские колбаски, маринованые огурчики, лук марс, горчично-медовый соус - 300гр - 87грн',
      type: 'photo',
    },

    {
      media: { source: 'img/ceasar.png' },
      caption:
        'Цезарь с прошутто  - классический цезарь с пармской ветчиной "прошуто" - 250гр - 75грн',
      type: 'photo',
    },

    {
      media: { source: 'img/fishSalad.png' },
      caption:
        'Салат с сёмгой и авокадо - Филе семги, авкодо, микс салат, томаты чери - 270гр - 120грн',
      type: 'photo',
    },
  ]);
});

// Roll and sushi menu

bot.hears('Cэндвич роллы 🌯 и суши меню 🍤', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'actionRoll.png' },
      caption:
        'Action Roll - Лаваш, говядина, сыр фета, перец болгарский, помидор, салат айсберг, фирменный соус - 400гр - 87грн',
      type: 'photo',
    },
    {
      media: { source: 'img/lightRoll.png' },
      caption:
        'Light roll - Лаваш, курица, сыр моцарелла, перец болгарский, помидор, салат айсберг, кукуруза, фирменный соус - 400гр - 78грн',
      type: 'photo',
    },

    {
      media: { source: 'img/Philadelphia.png' },
      caption:
        'Филадельфия - Крем сыр, лосось, огурец, икра тобико - 280гр - 135грн',
      type: 'photo',
    },

    {
      media: { source: 'kaliforniya.png' },
      caption:
        'Калифорния с креветкой - Кревета, крем сыр, огурец, авакадо, тобико - 280гр - 135грн - 270гр - 120грн',
      type: 'photo',
    },

    {
      media: { source: 'img/alaska.png' },
      caption:
        'Аляска ролл с угрем и сливочным сыром - Угорь, сыр Виола, унаги соус, кунжут - 280гр - 140грн - 270гр - 120грн',
      type: 'photo',
    },
    {
      media: { source: 'img/shrimp.png' },
      caption:
        'Ролл с хрустящей креветкой и листом салата - Креветка в темпуре, крем сыр, авакадо, лист салата, икра тобико, унаги соус, кунжут - 280гр - 140грн - 350гр - 160грн',
      type: 'photo',
    },
    {
      media: { source: 'shrimpChips.png' },
      caption: 'Рисовые чипсы креветочные - 100гр - 500грн',
      type: 'photo',
    },
  ]);
});

// fries menu
bot.hears('Фри меню 🍟', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'fires.png' },
      caption: 'Фри - 200гр - 30грн',
      type: 'photo',
    },
    {
      media: { source: 'img/nuagets.png' },
      caption: 'Наггетсы - 250гр - 59грн',
      type: 'photo',
    },

    {
      media: { source: 'img/nuagets.png' },
      caption: 'Сырные палочки - 180гр - 45грн',
      type: 'photo',
    },
  ]);
});

// Dessert menu

bot.hears('Десерты 🧁', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'carret.png' },
      caption:
        'Морковное пирожное - Карамельный бисквит, морковно-шоколадный ганаш, морковно-сливочный мусс - 79грн',
      type: 'photo',
    },
    {
      media: { source: 'iceCream.png' },
      caption: 'Мороженое - 60грн',
      type: 'photo',
    },

    {
      media: { source: 'img/brauni.png' },
      caption: 'Шоколадный брауни с грецкими орехами - 60грн',
      type: 'photo',
    },
  ]);
});

// Drinks menu
bot.hears('Напитки 🍸', ctx => {
  ctx.replyWithPhoto(
    { source: 'drinks.png' },
    Extra.load({
      caption:
        'Выберите что желаете выпить и нажмите на картинку что бы увидеть цену!',
    })
      .markdown()
      .markup(m =>
        m.inlineKeyboard([
          [m.callbackButton('Водка', 'vodka'), m.callbackButton('Джин', 'jin')],
          [
            m.callbackButton('Ликеры', 'liquor'),
            m.callbackButton('Текила и вермуты', 'tequilaVermouth'),
          ],
          [m.callbackButton('Пиво', 'bear'), m.callbackButton('Ром', 'rum')],
          [m.callbackButton('Вино', 'vine'), m.callbackButton('Шоты', 'shots')],
          [
            m.callbackButton('Виски', 'whiskey'),
            m.callbackButton('Бурбон', 'burbone'),
            m.callbackButton('Лимонад', 'lemonade'),
          ],
          [
            m.callbackButton('Безалкогольные напитки', 'drinks'),
            m.callbackButton('Коффе', 'coffe'),
          ],
          [m.callbackButton('Коктейль', 'cocktails')],
        ]),
      ),
  );
});

bot.action('vodka', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'absolutVodka.png' },
      caption: 'Absolute - 50 - 40грн',
      type: 'photo',
    },
    {
      media: { source: 'finlandia.png' },
      caption: 'Finlandia - 50 - 40грн',
      type: 'photo',
    },
  ]);
});

bot.action('jin', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'tanqueray.png' },
      caption: 'Tanqueray - 50 - 75грн',
      type: 'photo',
    },
    {
      media: { source: 'magellan.png' },
      caption: 'Magellan - 50 - 75грн',
      type: 'photo',
    },
  ]);
});

bot.action('liquor', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'jegermeister.png' },
      caption: 'Jegermeister - 50 - 70грн',
      type: 'photo',
    },
    {
      media: { source: 'baileys.png' },
      caption: 'Baileys - 50 - 75грн',
      type: 'photo',
    },
    {
      media: { source: 'amaretto.png' },
      caption: 'Amaretto - 50 - 60грн',
      type: 'photo',
    },
    {
      media: { source: 'sambuca.png' },
      caption: 'Sambuca - 50 - 65грн',
      type: 'photo',
    },
  ]);
});

bot.action('tequilaVermouth', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'tequila.png' },
      caption: 'Tequila - Espolon Blanco - 50 - 65грн',
      type: 'photo',
    },
    {
      media: { source: 'martini.png' },
      caption: 'Martini Bianco - 50 - 30грн',
      type: 'photo',
    },
    {
      media: { source: 'martiniRosso.png' },
      caption: 'Martini Bianco - 50 - 30грн',
      type: 'photo',
    },
  ]);
});

bot.action('bear', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'corona.png' },
      caption: 'Corona Extra - 0.33 - 55грн',
      type: 'photo',
    },
    {
      media: { source: 'blanc.png' },
      caption: 'Kronenbourg Blanc 1664 - 0.33 - 45грн',
      type: 'photo',
    },
    {
      media: { source: 'miller.png' },
      caption: 'Miller Genuine draft - 0.25 - 45грн',
      type: 'photo',
    },
  ]);
});

bot.action('rum', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'havana.png' },
      caption: 'Havana club 3 - 50 - 60грн',
      type: 'photo',
    },
    {
      media: { source: 'havanEspecial.png' },
      caption: 'Havana club Especial - 50 - 60грн',
      type: 'photo',
    },
    {
      media: { source: 'cmsg.png' },
      caption: 'Capitain Morgan Spiced Gold - 50 - 60грн',
      type: 'photo',
    },
    {
      media: { source: 'cmd.png' },
      caption: 'Capitain Morgan Dark - 50 - 60грн',
      type: 'photo',
    },
  ]);
});

bot.action('vine', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'fragolinoRosso.png' },
      caption: 'Fragolino rosso - 0.75 - 230грн',
      type: 'photo',
    },
    {
      media: { source: 'fragolinnoBianco.png' },
      caption: 'Fragolino bianco - 0.75 - 230грн',
      type: 'photo',
    },
    {
      media: { source: 'prosecco.png' },
      caption: 'Prosecco - 100 (1л) - 80грн',
      type: 'photo',
    },
    {
      media: { source: 'lambrusco.png' },
      caption: 'Lambrusco п/сл - 0,75 - 250грн',
      type: 'photo',
    },
    {
      media: { source: 'lambruscoDry.png' },
      caption: 'Lambrusco сух. - 0,75 - 250грн',
      type: 'photo',
    },
    {
      media: { source: 'cava.png' },
      caption: 'Cava Visage - 0,75 - 450грн',
      type: 'photo',
    },
    {
      media: { source: 'pinot.png' },
      caption: 'Pinot Grigo бел.сух - 50 - 30грн',
      type: 'photo',
    },
    {
      media: { source: 'cabernet.png' },
      caption: 'Cabernet Sauvignon кр.сух. - 50 - 30грн',
      type: 'photo',
    },
    {
      media: { source: 'sauvingionBlanc.png' },
      caption: 'Sauvingion Blanc бел.п/сл - 50 - 30грн',
      type: 'photo',
    },
    {
      media: { source: 'soloCorso.png' },
      caption: 'Solo Corso кр.п/сл- 50 - 25грн',
      type: 'photo',
    },
  ]);
});

bot.action('shots', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'hirosima.png' },
      caption: 'Hirosima - 65грн',
      type: 'photo',
    },
    {
      media: { source: 'gringo.png' },
      caption: 'Зеленый мексиканец - 65грн',
      type: 'photo',
    },
    {
      media: { source: 'b52.png' },
      caption: 'Б52 - 65грн',
      type: 'photo',
    },
    {
      media: { source: 'b53.png' },
      caption: 'Б53 - 65грн',
      type: 'photo',
    },
  ]);
});

bot.action('lemonade', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'raspberyBasil.png' },
      caption: 'Raspberry Basil - 50грн',
      type: 'photo',
    },
    {
      media: { source: 'mojito.png' },
      caption: 'Mojito - 50грн',
      type: 'photo',
    },
    {
      media: { source: 'cucmber.png' },
      caption: 'Cucumber Passion - 50грн',
      type: 'photo',
    },
    {
      media: { source: 'fruitLemonade.png' },
      caption: 'Fruit - 50грн',
      type: 'photo',
    },
    {
      media: { source: 'grapefruit.png' },
      caption: 'Grapefruit Raspberries - 50грн',
      type: 'photo',
    },
  ]);
});

bot.action('whiskey', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'glenfiddich.png' },
      caption: 'Glenfiddich 12y.o - 50 - 140грн',
      type: 'photo',
    },
    {
      media: { source: 'tullamore.png' },
      caption: 'Tullamore Dew - 50 - 70грн',
      type: 'photo',
    },
    {
      media: { source: 'ballantines.png' },
      caption: 'Ballantines - 50 - 70грн',
      type: 'photo',
    },
    {
      media: { source: 'jameson.png' },
      caption: 'Jameson - 50 - 75грн',
      type: 'photo',
    },
    {
      media: { source: 'spiceBox.png' },
      caption: 'Spicebox - 50 - 110грн',
      type: 'photo',
    },
    {
      media: { source: 'redlabel.png' },
      caption: 'Red label - 50 - 70грн',
      type: 'photo',
    },
    {
      media: { source: 'thepogueswhiskey.png' },
      caption: 'The pogues - 50 - 90грн',
      type: 'photo',
    },
  ]);
});

bot.action('burbone', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'jimbeamHoney.png' },
      caption: 'Jim Beam Honey - 50 - 65грн',
      type: 'photo',
    },
    {
      media: { source: 'jimbeamWhite.png' },
      caption: 'Jim Beam White - 50 - 65грн',
      type: 'photo',
    },
    {
      media: { source: 'wildturkey81.png' },
      caption: 'Wild Turkey 81 - 50 - 75грн',
      type: 'photo',
    },
    {
      media: { source: 'wildturkey101.png' },
      caption: 'Wild Turkey 101 - 50 - 80грн',
      type: 'photo',
    },
  ]);
});

bot.action('drinks', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'cocacola.png' },
      caption: 'Coca-Cola - 0.33/0.5 - 20/25грн',
      type: 'photo',
    },
    {
      media: { source: 'sprite.png' },
      caption: 'spirte - 0.33 - 20грн',
      type: 'photo',
    },
    {
      media: { source: 'schweppes.png' },
      caption: 'Shweppes - 0.33 - 20грн',
      type: 'photo',
    },
    {
      media: { source: 'rich.png' },
      caption: 'Сок Rich - 0.25 - 20грн',
      type: 'photo',
    },
    {
      media: { source: 'borjomi.png' },
      caption: 'Borjomi - 0.33 - 45грн',
      type: 'photo',
    },
    {
      media: { source: 'bonaqua.png' },
      caption: 'Вода Bon Aqua - 0.5 - 15грн',
      type: 'photo',
    },
    {
      media: { source: 'burn.png' },
      caption: 'Burn - 0.25 - 45грн',
      type: 'photo',
    },
    {
      media: { source: 'redbull.png' },
      caption: 'Red Bull - 0.25 - 50грн',
      type: 'photo',
    },
  ]);
});

bot.action('coffe', ctx => {
  ctx.replyWithMediaGroup([
    {
      media: { source: 'americano.png' },
      caption: 'Americano - 30грн',
      type: 'photo',
    },
    {
      media: { source: 'espresso.png' },
      caption: 'Espresso - 30грн',
      type: 'photo',
    },
    {
      media: { source: 'cappuccino.png' },
      caption: 'Cappuccino - 35грн',
      type: 'photo',
    },
    {
      media: { source: 'latte.png' },
      caption: 'Latte - 40грн',
      type: 'photo',
    },
    {
      media: { source: 'flatWhite.png' },
      caption: 'Flat white - 40грн',
      type: 'photo',
    },
    {
      media: { source: 'lungo.png' },
      caption: 'Lungo - 30грн',
      type: 'photo',
    },
    {
      media: { source: 'raf.png' },
      caption: 'Raf - 45грн',
      type: 'photo',
    },
    {
      media: { source: 'tea.png' },
      caption: 'Tea - 20грн',
      type: 'photo',
    },
  ]);
});

bot.action('cocktails', ctx => {
  ctx.replyWithPhoto({ source: 'cocktailMenu.png' });
});

// general menu

bot.hears('Общее меню 📋', ctx => {
  ctx.replyWithPhoto({ source: 'menu.png' });
});

bot.launch();

console.log('Bot started succsessfuly');
