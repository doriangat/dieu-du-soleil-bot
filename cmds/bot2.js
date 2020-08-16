const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'bot2',
	description: "Répond a bill (touche pas a ça pd)",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.Message()
        message.channel.startTyping()
        setTimeout(function(){
            message.channel.send("Tkt c'est normal bro")
            message.channel.send("b!bot3")
            message.channel.stopTyping(true)


        }, 5000); 
        
        
        } 
    }
}

module.exports.help = {
    name: "bot2"
}