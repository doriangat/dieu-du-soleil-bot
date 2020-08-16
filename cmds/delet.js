const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'delet',
	description: "Bill ordone de supprimer un post",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.RichEmbed()
        .setColor('#50655e')
        .setImage("https://media.discordapp.net/attachments/554674515028738052/668466340558012457/delete.png");
        message.channel.send(couteau)
        } 
    }
}

module.exports.help = {
    name: "delet"
}
