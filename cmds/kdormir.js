const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'kdormir',
	description: "Rapelle qu'il faut bien dormir pour aller a l'école",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.RichEmbed()
        message.channel.send("```css\nIl faut bien dormir\n```", { files: ["./images/Dormir pour lecole.mp4"] })
        } 
    }
}

module.exports.help = {
    name: "kdormir"
}
