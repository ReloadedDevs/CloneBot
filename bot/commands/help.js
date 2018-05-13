const { RichEmbed } = require('discord.js');

module.exports.run = (Client, msg, args) => {

    var emb =  {
        embed: {
            color: msg.channel.guild.me.displayColor,
            timestamp: new Date(),
            thumbnail: {
              url: Client.user.avatarURL
            },
            author: {
                name: "Stats",
                icon_url: Client.user.avatarURL
            },
            footer: {
                text: "Requested by " + msg.author.username
            },
            fields: [
                {
                    name: ":white_small_square: c!help",
                    value: "Shows this message",
                },
                {
                    name: ":white_small_square: c!clone",
                    value: "Starts cloning this server",
                },
                {
                    name: ":white_small_square: c!stats",
                    value: "Shows the stats",
                },
                {
                    name: ":white_small_square: c!invite",
                    value: "Shows an invitation message",
                }
            ]    
        }
    }; msg.channel.send(emb);
}