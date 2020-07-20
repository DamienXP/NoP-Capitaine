const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login(precess.env.TOKEN)

var prefix = ("Coucou");

if(message.content === prefix + "@help"){
   message.channel.send("Tu a besoins t'aide ?")
}
bot.on ('message', msg => {
  if (msg.content === 'ping') {
      msg.channel.send ('pong');
     
  }
});
