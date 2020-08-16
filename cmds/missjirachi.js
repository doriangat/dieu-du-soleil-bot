const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'missjirachi',
	description: "Envoie un coucou",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.RichEmbed()
        .setAuthor(`COUCOU`)
        .setColor('#03355b')
        .setImage("https://cdn.discordapp.com/attachments/684442762195501089/689548701852762112/tenor.gif");
        message.channel.send(couteau)
        } 
    }
}

module.exports.help = {
    name: "missjirachi"
}
