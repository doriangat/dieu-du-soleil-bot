const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'kcouteau',
	description: "Rapelle de dire non au karambit dans les bureau",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.RichEmbed()
        message.channel.send("```css\nStop couteau CSGO\n```", { files: ["./images/Karambit dans les bureau.mp4"] })
        } 
    }
}

module.exports.help = {
    name: "kcouteau"
}
