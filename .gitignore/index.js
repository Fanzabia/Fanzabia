const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
  bot.user.setPresence({ game: { name: 'aider les joueurs│/help', type: 0} });
  console.log("Je suis connecté !");
});
  
  bot.login('NDk1NTEwMTIzMzUyMTYyMzE0.DpIbvA.GqxAIhCURZKmsB1Ok7OcQbGvDKA');


bot.on('message', message => {


   if (message.content === "ping"){
     message.reply("pong");
     console.log('ping pong');
   }

    if (message.content === "Ping"){
      message.reply("pong");
      console.log('Ping pong');
    }

    if (message.content === prefix + "bvn"){
       var bvn_embed = new Discord.RichEmbed()
        .setColor('#4ECA91')
        .addField(message.author.username + " vous souhaite la Bienvenue sur Fanzabia !", "==================================")
        .setFooter("👉 Vous aussi souhaitez la bienvenue avec /bvn 🎉")
      message.channel.sendEmbed(bvn_embed);
       console.log("Commende bvn demandée !"); 
   }


   if (message.content === prefix + "stats"){
    var stats_embed = new Discord.RichEmbed()
     .setColor('#4ECA91')
     .setThumbnail(message.author.avatarURL)
     .addField("Pseudo : " + message.author.username, "Discriminateur : #" + message.author.discriminator)
     .addField("ID : "+ message.author.id, "")
     .setFooter("Vous aussi découvrez vos stats avec /stats")
   message.channel.sendEmbed(stats_embed);
    console.log("Commande bvn demandée !"); 
   }
 
 });
