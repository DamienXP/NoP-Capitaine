const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = "--VOTRE PREFIXE--"
var token = process.env.TOKEN

bot.on('ready', () => {
  console.log(`Connecté en tant que ${bot.user.tag}! \n \n`);
  bot.user.setActivity("Grand Theft Auto V")
});

bot.on('message', msg => {

  //Commande ping
  if (msg.content == '-ping') {
    msg.reply('🏓 Pong!');
    console.log(`Commande ping \n Utilisateur : \n    Pseudo -> ${msg.author.tag} \n    Identifiant -> ${msg.author.id} \n Où : \n    Nom du serveur & ID du serveur -> ${msg.guild.name} & ${msg.guild.id} \n    Nom & ID du salon -> ${msg.channel.name} & ${msg.channel.id}`)
  }


});

bot.on('message', msg => {
  if (msg.content === '-twitter') {
    msg.channel.send('Pour me suivre https://www.twitter.com/nexottv');
  }
});

bot.on('message', msg => {
  if (msg.content === '-twitch') {
    msg.channel.send('Pour me suivre https://www.twitch.tv/nexottv54');
  }
});

bot.on('message', msg => {
  if (msg.content === '-instagram') {
    msg.channel.send('Pour me suivre https://www.instagram.com/nexottv');
  }
});

bot.on('message', msg => {
  if (msg.content === '-youtube') {
    msg.channel.send('Pour me suivre https://www.youtube.com/c/nexottv');
  }
});

bot.on('message', msg => {
  if (msg.content === '-help') {
    msg.channel.send('Hey. Je suis le FONDATEUR tu as besoins de mon aide contact moi en MP ``ＮｅｘｏＴＴｖ∆#1209``');
  }
});

bot.on('message', msg => {
  if (msg.content === '-commands') {
    msg.channel.send(' ``-youtube`` ``-twitter`` ``-twitch`` ``-instagram`` ``-help`` ');
  }
});

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur mon server discord ' + member.displayName)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
})




bot.login("
