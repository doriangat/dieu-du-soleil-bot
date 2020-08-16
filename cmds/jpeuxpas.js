const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'jpeuxpas',
	description: "Joue jpeuxpas.mp3",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    voiceChannel.join().then(connection => {
    console.log("joined channel");
    const dispatcher = connection.playFile('./sons/jpeuxpas.mp3');
    
}).catch(err => console.log(err));
isReady = true
        }
module.exports.help = {
    name: "jpeuxpas"
}