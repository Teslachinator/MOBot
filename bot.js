const TelegramBot = require('node-telegram-bot-api');

const API_KEY_BOT = '6458627490:AAG6_DfcnwWgzjQTy_BK4PcBiegJl7hA3rM';

const bot = new TelegramBot(API_KEY_BOT, { polling: true });

bot.on('text', async msg => {
    try {
        if (msg.text == '/start'){
            await bot.sendMessage(msg.chat.id, 'Бот успешно запущен!', {
                reply_markup: {
                    keyboard: [
                        ['Первый', 'Второй'],
                        ['Третий', 'Четвёртый']
                    ],
                    resize_keyboard: true
                }
            });
        }
        else if (msg.text == '/help'){
            const message = '*Раздел помощи*\n\n' + 
            'Данный бот написан в целях саморазвития, а не для коммерции\n\n' + 
            'Автор: \[MordovYakut\]\(t.me/LZTMonkeyoff\)';
            await bot.sendMessage(msg.chat.id, message, {
                parse_mode: 'MarkdownV2',
                disable_web_page_preview: true
            });
        }
        else {
            await bot.sendMessage(msg.chat.id, 'Неизвестная команда');
        }
    }
    catch(error) {
        console.log(error);
    }
})

const commands = [
    {
        command: '/start',
        description: 'Перезапуск бота'
    },
    {
        command: '/help',
        description: 'Раздел помощи'
    },
]

bot.setMyCommands(commands);

bot.on('polling_error', err => console.log(err.data.error.message));