const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'aery',
	description: "Rapelle que aery doit des nouilles",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.Message()
        message.channel.send("Aery doit des nouilles a tout le monde mais comme la brigade c'est des gens sympa aery ne doit pas des nouilles a tout le monde.")
        } 
    }
}

module.exports.help = {
    name: "aery"
}