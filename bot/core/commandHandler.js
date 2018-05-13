module.exports.run = async (Client, msg) => {

    if(msg.channel.type == "dm" || msg.channel.type == "group") return;
    if(msg.author.bot === true) return;

    if(msg.channel.type == "text" && msg.content.startsWith(Client.prefix)) {

        if(!msg.guild.me.permissionsIn(msg.channel).has("SEND_MESSAGES")) return;
    
        var invoke = msg.content.split(' ')[0].substr(Client.prefix.length);
        var args   = msg.content.split(' ').slice(1);
    
        var cmd = Client.commands.get(invoke);
    
        if(cmd) {
            try { await cmd.run(Client, msg, args); } catch(error) { console.log(error); }
        }
    }
}