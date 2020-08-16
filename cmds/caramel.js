const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'caramel',
	description: "Joue caramelldansen en boucle",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    voiceChannel.join().then(connection => {
    console.log("joined channel");
    const dispatcher = connection.playFile('./sons/caramel.mp3');
    dispatcher.setVolume(0.3);
    dispatcher.on("end", end => {
        console.log("left channel");
    });
    
    
    
}).catch(err => console.log(err));
isReady = true
        }
module.exports.help = {
    name: "caramel"
}