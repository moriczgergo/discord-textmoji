const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var toEmoji = require('./toemoji.js');
var fs = require('fs');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message =>{
    if (message.content.startsWith('!emoji')){
        if (message.content.startsWith('!emoji ')){
            var text = message.content.substr('!emoji '.length);
            if (text.trim() != ""){
                var stats = JSON.parse(fs.readFileSync("stats.json", "UTF-8"));
                stats.convert++;
                fs.writeFileSync("stats.json", JSON.stringify(stats), "UTF-8");
                var emoji = toEmoji(text);
                if (emoji.trim() != ""){
                    message.reply(emoji);
                }
            } else {
                message.reply('Usage: `!emoji text`');
            }
        } else {
            message.reply('Usage: `!emoji text`');
        }
    }
});

client.login(config.token);