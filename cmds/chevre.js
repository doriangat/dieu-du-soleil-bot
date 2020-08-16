const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'chevre',
	description: "Envoie des éloges sur la brigade et une jolie image de chèvre",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.Message()
        message.channel.send("Vive la brigade des chèvres jnoun!", { files: ["./images/chévre.jpg"] })
        } 
    }
}

module.exports.help = {
    name: "chevre"
}