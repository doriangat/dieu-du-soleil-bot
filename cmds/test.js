const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'mp',
	description: "Envoie le lien avec quelques commandes",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.Message()
        let destinataire = message.guild.member(message.mentions.users.first());
        if (!destinataire){
            return message.channel.send("L'utilisateur n'existe pas");
        }
        destinataire.send(args.join(" "));
        } 
    }
}

module.exports.help = {
    name: "mp"
}