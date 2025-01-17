const { Bot, InlineKeyboard } = require('grammy');

const bot = new Bot('7799286106:AAGyej1whC3X31Ulij73xSHBUGdyOhXBW7g');

bot.command('start', (ctx) => {
    const keyboard = new InlineKeyboard()
        .text('Опция 1', 'option1')
        .text('Опция 2', 'option2')
        .row()
        .text('Помощь', 'help');

    ctx.reply('Выберите одну из опций:', { reply_markup: keyboard });
});

// Обработка нажатий кнопок
bot.on('callback_query:data', (ctx => {
    const data = ctx.callbackQuery.data;

    if (data === 'option1') {
        ctx.answerCallbackQuery('Вы выбрали Опцию 1!');
        ctx.reply('Это содержание для Опции 1.');
    } else if (data === 'option2') {
        ctx.answerCallbackQuery('Вы выбрали Опцию 2!');
        ctx.reply('Это содержание для Опции 2.');
    } else if (data === 'help') {
        ctx.answerCallbackQuery('Вы выбрали опцию для получения информации.');
        ctx.reply('Для получения информации выберите любую из опций.');
    }
}));

bot.start();
console.log('Бот запущен.');