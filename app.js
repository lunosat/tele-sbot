const {Telegraf} = require('telegraf')
const axios = require('axios')

const bot = new Telegraf('1943842646:AAHx9LYfHnCoeK6DaDuGyeQUQei3biVu5yA')

bot.start((ctx) => ctx.reply('Olá, seja bem vindo'))
bot.help((ctx) => ctx.reply('Quer ajuda em que se nem eu sei o que vou fazer?'))
bot.on('sticker', (ctx) => ctx.reply('Ok'))
bot.hears('hi', (ctx) => ctx.reply('Opa'))
bot.launch()

bot.command('teste', (ctx) => {
    try{
        axios.get(`https://sapphire-api.herokuapp.com/api/textmaker/random?text=Akirah&theme=art-quote&apikey=Alphabot`).then(res => {
            //conn.sendFile(m.chat, res.data.result.url, 'glitch.jpg', 'Bye Oficial Sapphire API')
            //ctx.reply(res.data.result.quotes)
            ctx.replyWithPhoto(res.data.result.url)
        })
    } catch (err) {
        console.log(err)
    }
    console.log('uu')
})

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
