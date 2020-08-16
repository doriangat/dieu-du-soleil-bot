const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'dent2',
	description: "Envoie l'emote de LA DENT DE NASHOR",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.Message()
        message.channel.send("<:Dent_De_Nashor:684449369264488523>")
        } 
    }
}

module.exports.help = {
    name: "dent2"
}