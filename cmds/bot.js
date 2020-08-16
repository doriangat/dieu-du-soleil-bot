const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'bot',
	description: "Répond a bill (touche pas a ça pd)",
}


module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.Message()
        message.channel.startTyping()
        setTimeout(function(){
            message.channel.send("Ouais tranquille et toi?")
            message.channel.send("b!bot2")
            message.channel.stopTyping(true)


        }, 5000);
      
        
        
        } 
    }
}

module.exports.help = {
    name: "bot"
}