const Discord = require('discord.js')
const { start } = require('repl')
const bot = new Discord.Client()

let prefix = "!"

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login("NzM0NDY3MDI5Mjg4ODc4MTQy.Xxju1g.QyZdcADOk9eNzPFlp1J6qppWasA")

bot.on('message', message => {
    if (message.content === '-instagram') {
      message.channel.send('https://www.instagram.com/nexottv')
    }
  });

  bot.on('message', message => {
    if (message.content === '-invite') {
      message.channel.send('https://discord.com/api/oauth2/authorize?client_id=734467029288878142&permissions=8&scope=bot')
    }
  });

  bot.on('message', message => {
    if (message.content === '-youtube') {
      message.channel.send('https://www.youtube.com/c/nexottv')
    }
  });

  bot.on('message', message => {
    if (message.content === '-twitch') {
      message.channel.send('https://www.twitch.tv/nexottv54')
    }
  });

  bot.on('message', message => {
    if (message.content === '-twitter') {
      message.channel.send('https://twitter.com/NexoTTv1')
    }
  });
