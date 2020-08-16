const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'playn2',
	description: "Joue LA DENT DE NASHOR2",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    voiceChannel.join().then(connection => {
    console.log("joined channel");
    const dispatcher = connection.playFile('./sons/Dent2.wav');
    
}).catch(err => console.log(err));
isReady = true
        }
module.exports.help = {
    name: "playn2"
}