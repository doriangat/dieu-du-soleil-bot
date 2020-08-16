const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'mp',
	description: "Le bot t'envoie un mp pour que tu te sente moin seul",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.Message()
        message.author.send("Je m'incruste dans tes mp. ça vas?")
        } 
    }
}

module.exports.help = {
    name: "mp"
}