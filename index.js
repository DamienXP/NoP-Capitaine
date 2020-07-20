const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login(precess.env.TOKEN)

bot.on ('message', msg => {
  if (msg.content === 'ping') {
      msg.channel.send ('pong');
     
  }
});
