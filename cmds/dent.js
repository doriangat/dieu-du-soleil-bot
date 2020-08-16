const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'dent',
	description: "Envoie l'image de LA DENT DE NASHOR",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.RichEmbed()
        .setAuthor(`${"LA"} DENT DE NASHOR!`)
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/641923235075850241/684499075084976144/Nashor27s_Tooth.png");
        message.channel.send(couteau)
        } 
    }
}

module.exports.help = {
    name: "dent"
}
