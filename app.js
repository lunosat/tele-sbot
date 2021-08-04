const {Telegraf} = require('telegraf')

const bot = new Telegraf('1943842646:AAHx9LYfHnCoeK6DaDuGyeQUQei3biVu5yA')

bot.start((ctx) => ctx.reply('Olá, seja bem vindo'))
bot.help((ctx) => ctx.reply('Quer ajuda em que se nem eu sei o que vou fazer?'))
bot.on('sticker', (ctx) => ctx.reply('Ok'))
bot.hears('hi', (ctx) => ctx.reply('Opa'))
bot.launch()

bot.command('teste', (ctx) => {
    ctx.reply('X')
})

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
