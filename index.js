const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
});

bot.login("NzM0NDY3MDI5Mjg4ODc4MTQy.XxWCAA.dN-Lrkr7eUh0oR28XKmqytum0tk")

bot.on('message', message => {
    if (message.content === 'ping') { 
      message.channel.send('pong !') 
    }
  });

  bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur mon serveur ' + member.displayName)
    }).catch(console.error)
 });
