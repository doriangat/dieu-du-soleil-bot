const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'requin',
	description: "HUUMME J4AI BIEN MANGER",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.RichEmbed()
        .setAuthor(`Requinquer`)
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/684447847361413131/685202731195301898/Requinquer.png");
        message.channel.send(couteau)
        } 
    }
}

module.exports.help = {
    name: "requin"
}
