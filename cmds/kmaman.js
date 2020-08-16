const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'kmaman',
	description: "Rapelle qu'il faut respecter sa maman",
}


module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.RichEmbed()
        message.channel.send("```css\nNoubliez pas de respecter vos mamans\n```", { files: ["./images/Respectez vos mamans.mp4"] })
        } 
    }
}

module.exports.help = {
    name: "kmaman"
}
