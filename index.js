const tmi = require('tmi.js')
const options = require('./options')

const client = new tmi.client(options.options)

url = 'toramaru08'

client.connect()

client.on('connected', (address, port) => {})

client.on('chat', (channel, user, message, self) => {

    client.color('blue')
    //user['msg-id'] == 'highlighted-message')
    if (message.match(/!git */) ){
        let gitDir = message.replace(/!git /, '')
        let type
        gitDir.includes('/') ? type = 'repositório' : type = 'usuário'
        githubUrl = `https://github.com/${gitDir}`
        client.action(url, `@${user['display-name']} Seu ${type} está aqui: ${githubUrl}`)
    }

    if (message.match(/!soniae */) ){
        let quality = message.replace(/!soniae /, '').toLowerCase()
        client.action(url, `A Sonia é MUITO ${quality}! ( ͡° ͜ʖ ͡°)`)
    }

    if (message.match(/!codigosonia */) ){
        client.action(url, 'A Sonia não tem um GitHub :(')
    }

    if (message.match(/!soniamexe */) ){
        let move = message.replace(/!soniamexe /, '').toLowerCase()
        client.action(url, `A Sonia mexe os/as ${move} ( ͡° ͜ʖ ͡°)`)
    }

    if (message.match(/!TemPedra() */) ){
        tempedra = Math.ceil(Math.random() * 10)
        let result
        tempedra >= 5 ? result = 'True' : result = 'False'
        client.action(url, `@${user['display-name']} TemPedra() => ${result}`)
    }
})