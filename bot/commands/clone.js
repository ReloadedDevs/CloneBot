const Discord = require('discord.js');

module.exports.run = async (Client, msg, args) => {
    //Client.embed.createEmbed(msg.channel, ":red_circle: We are working on that!", "Not available");

    var categories = new Discord.Collection();

    await msg.guild.channels.filter(channel => channel.type == "category").array().forEach(category => {
        categories.set(category.id, category);
    });

    console.log(categories);
}