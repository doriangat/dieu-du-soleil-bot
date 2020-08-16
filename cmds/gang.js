const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'gang',
	description: "Envoie une photo d'un homme fan du FlexGang (faites pas ça svp)",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.RichEmbed()
        .setAuthor(`t'es fan tu flex gang?`)
        .setColor('#03355b')
        .setImage("https://media.discordapp.net/attachments/684442762195501089/693613011373522984/EUO2NVSXYAc8S7a.png?width=565&height=669");
        message.channel.send(couteau)
        } 
    }
}

module.exports.help = {
    name: "gang"
}
