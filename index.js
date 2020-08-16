const Discord = require("discord.js"); // Le dieu du soleil
const fs = require('fs');
const prefix = "s!"


var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("BOT IS READY");
    bot.user.setActivity("s!help", {type: "STREAMING", url:"https://www.twitch.tv/maki_sashimi"});
    
}) 

bot.commands = new Discord.Collection();

function loadCmds() {
    fs.readdir("./cmds/", (err, files) => {
        if(err) console.erroe(err);
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if(jsFiles.length <= 0) {
            console.log("Aucune commande à chargé.")
            return;
        }
        console.log(`${jsFiles.length} commandes chargées.`);
        jsFiles.forEach((f, i) => {
            delete require.cache[require.resolve(`./cmds/${f}`)];
            var props = require(`./cmds/${f}`);
            console.log(`${i + 1}: ${f} chargé`);
            bot.commands.set(props.help.name, props); 
        })
    })
};

loadCmds();

bot.on('message', message => { 

var messageArray = message.content.split(/\s+/g);
var args = messageArray.slice(1);
var command = messageArray[0];
var cmd = bot.commands.get(command.slice(prefix.length));
if(!command.startsWith(prefix)) return;
if(cmd) cmd.run(bot, message, args);    
}) 


bot.login(process.env.TOKEN)
