const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'pic',
	description: "Envoie une image aleatoire de bill",
}

module.exports.run = async (bot, message, args) => {

    {
{
    message.delete();
     var roll = Math.floor(Math.random() * 7) + 1;     //return Math.floor(Math.random() * (max - min + 1)) + min;

     if(roll==1) { 
        var couteau = new Discord.RichEmbed()
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/554674515028738052/667737171020611584/bill_1.jpg?width=1193&height=670");
        message.channel.send(couteau)
    }

    else if (roll==2) {
        var couteau = new Discord.RichEmbed()
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/554674515028738052/667737173138604061/bill_2.jpg?width=1191&height=670");
        message.channel.send(couteau)

    }
   
    else if (roll==3) {
        var couteau = new Discord.RichEmbed()
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/554674515028738052/667737176116822026/bill_3.jpg?width=1191&height=670");
        message.channel.send(couteau)

    }
    
    else if (roll==4) {
        var couteau = new Discord.RichEmbed()
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/554674515028738052/667738324877836308/Bill-gigantosaurus-700x886.png?width=530&height=671");
        message.channel.send(couteau)

    }
    else if (roll==5) {
        var couteau = new Discord.RichEmbed()
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/554674515028738052/667738861148831744/21262128c2ae2a89f8533c707f8c1020.png");
        message.channel.send(couteau)

    }
    
    else if (roll==6) {
        var couteau = new Discord.RichEmbed()
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/554674515028738052/667741583386345472/unknown.png");
        message.channel.send(couteau)
    }

    else if (roll==7) {
        var couteau = new Discord.RichEmbed()
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/554674515028738052/670740551691141120/OKLM.png");
        message.channel.send(couteau)
    }
}


} 
    
}

module.exports.help = {
    name: "pic"
}
