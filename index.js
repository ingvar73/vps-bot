// process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const os = require('os');
const bot = new TelegramBot('948597251:AAEFAWScP09jzpNIRp74X5asgvyfxkRh1RE', {polling: true});
const Promise = require('bluebird');
Promise.config({
    cancellation: true
});

bot.on('message', (msg) => {

    bot.sendMessage(msg.chat.id, `Hello from ${os.type()}, bot says hi to "${msg.from.first_name}"`)

});

