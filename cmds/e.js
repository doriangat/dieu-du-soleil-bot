const Discord = require('discord.js');
const fs = require('fs');
const { isNullOrUndefined } = require('util');

module.exports = {
	name: 'e [texte]',
	description: "Pour faire parler le bot",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.Message()
        var prefix = "s!e" ;
        
        const args = message.content.slice(prefix.length).trim().split('/ +/');
       
        if (args[0] === "") {
            return message.channel.send(`Écris au moins un mot, ${message.author}!`);
        }
                
    
        message.channel.send(args[0]);
        
        
        }
    
        } 
    }

module.exports.help = {
    name: "e"
}
