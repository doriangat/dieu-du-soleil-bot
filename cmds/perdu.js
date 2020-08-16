const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'perdu',
	description: "Joue je suis perdu",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    voiceChannel.join().then(connection => {
    console.log("joined channel");
    const dispatcher = connection.playFile('./sons/Perdu.mp4');
    
}).catch(err => console.log(err));
isReady = true
        }
module.exports.help = {
    name: "perdu"
}