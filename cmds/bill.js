const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'bill',
	description: "Envoie une image aleatoire de bill qui est pret pour la bagarre",
}

module.exports.run = async (bot, message, args) => {

    {
{
    message.delete();
     var roll = Math.floor(Math.random() * 3) + 1;     //return Math.floor(Math.random() * (max - min + 1)) + min;
    
     if(roll==1) { 
        var couteau = new Discord.RichEmbed()
        .setAuthor(`${"Bill"} est prêt pour la bagarre.`)
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/554674515028738052/667512968560377879/BillBagarre.png?width=670&height=670");
        message.channel.send(couteau)
    }

    else if (roll==2) {
        var couteau = new Discord.RichEmbed()
        .setAuthor(`${"Bill"} gagne la bagarre comme toujours.`)
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/554674515028738052/667529332876509205/billWinBagarre.png?width=670&height=670");
        message.channel.send(couteau)

    }
   
    else if (roll==3) {
        var couteau = new Discord.RichEmbed()
        .setAuthor(`${"Bill"} perd la bagarre dans un univers paralelle.`)
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/554674515028738052/667529317370167306/BillLooseBagarre.png?width=670&height=670");
        message.channel.send(couteau)

    }
    
}


} 
    
}

module.exports.help = {
    name: "bill"
}
