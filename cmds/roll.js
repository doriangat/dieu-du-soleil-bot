const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'roll',
	description: "Donne un nombre entre 1 et 100",
}

module.exports.run = async (bot, message, args) => {

    {
{
  
     var roll = Math.floor(Math.random() * 100) + 1;    //return Math.floor(Math.random() * (max - min + 1)) + min;
    
    
     var couteau = new Discord.RichEmbed()
     message.channel.send("hop la un nombre entre 1 et 100: " +"***"+ roll + "***")
    

    
 }
    
}


} 

module.exports.help = {
    name: "roll"
}
