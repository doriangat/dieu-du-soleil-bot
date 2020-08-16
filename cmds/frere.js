const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'frere',
	description: "Envoie un moment frere certifier",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.RichEmbed()
        message.channel.send("```CECI EST UN MOMENT FRERE CERTIFIER```", { files: ["./images/frere.mp4"] })
        } 
    }
}

module.exports.help = {
    name: "frere"
}
