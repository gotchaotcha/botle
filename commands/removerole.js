const Discord = require('discord.js');
module.exports = {
    name: 'removerole',
    execute: async (message, args, client) => {
       let target = message.mentions.members.first()
       message.delete()

       if(!target) return message.reply('Bitte gebe einen user an!');

       let role = message.mentions.roles.first();

       if(!role) return message.reply('Gebe eine Rolle an, welche du zuweisen möchtest!');

       let reason = args.slice(2).join(' ');

       if(!reason) return message.reply('Gebe einen Grund an!');

       if(!args.length) return message.channel.send('**Benutze ,removerole <@user> <@rolle> <grund>**');

       return message.channel.send(
           new Discord.MessageEmbed()
           .setColor('RED')
           .setDescription(`Dem Teammitglied **${target.user.username}** wurde der Rang ${role} entzogen! **Grund: ${reason}**`)
       )
       .then(target.roles.remove(role));

    }
}