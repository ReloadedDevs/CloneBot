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
                    name: ":white_small_square: Invite CloneBot to your server",
                    value: "[Invite here](https://discordapp.com/api/oauth2/authorize?client_id=445263123029557249&permissions=8&scope=bot)",
                },
                {
                    name: ":white_small_square: Join CloneBots official server",
                    value: "[Join here](https://discord.gg/JrGjupJ/)",
                }
            ]    
        }
    }; msg.channel.send(emb);
}
