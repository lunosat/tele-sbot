const {Telegraf} = require('telegraf')
const axios = require('axios')

const bot = new Telegraf('1956985769:AAFn7XmAwlprW811yU-zbbDXO7QkW4gcOmU')

let startText = 'Olá, sejá bem vindo ao Image Maker, um simples bot desenvolvido para lhe entregar belas imagens\n\nAcompanhe nosso canal: t.me/SapphireNetwork'
bot.start((ctx) => ctx.reply(startText))
bot.help((ctx) => ctx.reply('Comandos:\n\n/love'))
bot.on('sticker', (ctx) => ctx.reply('Ok'))
bot.hears('hi', (ctx) => ctx.reply('Opa'))
bot.launch()

bot.command('love', (ctx) => {
    let query = ""
    ctx.reply('Diga-me o texto que deseja.')
    bot.on('text', (ctx) => {
        query = ctx.message.text
        query.toString()
        try{
            axios.get(`https://sapphire-api.herokuapp.com/api/textmaker/random?text=${query}&theme=art-quote&apikey=Alphabot`).then(res => {
                ctx.replyWithPhoto(res.data.result.url)
                console.log('Yup, alguém usou :)')
            })
        } catch (err) {
            console.log(err)
            ctx.reply('Ops, algo deu errado! Tente novamente.')
        }
        return
    })
    return
})
bot.command('coffe', (ctx) => {
    let query = ""
    ctx.reply('Diga-me o texto que deseja.')
    bot.on('text', (ctx) => {
        query = ctx.message.text
        try{
            axios.get(`https://sapphire-api.herokuapp.com/api/textmaker/senja?text=${query}&theme=coffee-cup&apikey=Alphabot`).then(res => {
                ctx.replyWithPhoto(res.data.result.url)
            })
        } catch {
            console.log(err)
            ctx.reply('Ops, algo deu errado! Tente novamente.')
        }
    })
})
bot.command('coffe2', (ctx) => {
    let query = ""
    ctx.reply('Diga-me o texto que deseja.')
    bot.on('text', (ctx) => {
        query = ctx.message.text
        try{
            axios.get(`https://sapphire-api.herokuapp.com/api/textmaker/senja?text=${query}&theme=coffee-cup2&apikey=Alphabot`).then(res => {
                ctx.replyWithPhoto(res.data.result.url)
            })
        } catch {
            console.log(err)
            ctx.reply('Ops, algo deu errado! Tente novamente.')
        }
    })
})


process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
