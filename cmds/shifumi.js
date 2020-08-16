const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'shifumi',
	description: "Envoie aleatoirement un Shi un Fu ou un Mi",
}

module.exports.run = async (bot, message, args) => {

    {
{
    message.delete();
     var roll = Math.floor(Math.random() * 3) + 1;     //return Math.floor(Math.random() * (max - min + 1)) + min;
    
     if(roll==1) { 
     var couteau = new Discord.RichEmbed()
     message.channel.send(":v:")
    }

    else if (roll==2) {
        var couteau = new Discord.RichEmbed()
     message.channel.send(":right_fist:")

    }
   
    else if (roll==3) {
        var couteau = new Discord.RichEmbed()
     message.channel.send(":raised_hand:")

    }
    
}


} 
    
}

module.exports.help = {
    name: "shifumi"
}
