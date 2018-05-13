const { RichEmbed } = require('discord.js');

module.exports.run = (Client, msg, args) => {

    var servers = Client.guilds.size;
    var members = Client.users.size;
    var channels = Client.channels.size;
    var uptime = time(Client.uptime);

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
                    name: ":white_small_square: Total Servers",
                    value: servers,
                },
                {
                    name: ":white_small_square: Total Members",
                    value: members,
                },
                {
                    name: ":white_small_square: Total Channels",
                    value: channels,
                },
                {
                    name: ":white_small_square: Current Uptime",
                    value: uptime,
                }
            ]    
        }
    }; msg.channel.send(emb);
}

function two(x) {return ((x>9)?"":"0")+x}
function three(x) {return ((x>99)?"":"0")+((x>9)?"":"0")+x}

function time(ms) {
var sec = Math.floor(ms/1000)
ms = ms % 1000
t = three(ms)

var min = Math.floor(sec/60)
sec = sec % 60
t = two(sec) + ":" + t

var hr = Math.floor(min/60)
min = min % 60
t = two(min) + ":" + t

var day = Math.floor(hr/60)
hr = hr % 60
t = two(hr) + ":" + t
t = day + ":" + t

return t
}