const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'flex',
	description: "Envoie une photo des membres du FlexGang",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.RichEmbed()
        .setAuthor(`Fear the FlexGang`)
        .setColor('#e600bb')
        .setImage("https://media.discordapp.net/attachments/684442762195501089/688817568777371664/FLEXGANG.jpg?width=1191&height=670");
        message.channel.send(couteau)
        } 
    }
}

module.exports.help = {
    name: "flex"
}
