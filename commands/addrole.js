const Discord = require('discord.js');
module.exports = {
    name: 'addrole',
    execute: async (message, args, client) => {
       let target = message.mentions.members.first()
       message.delete()

       if(!target) return message.reply('Bitte gebe einen user an!');

       let role = message.mentions.roles.first();

       if(!role) return message.reply('Gebe eine Rolle an, welche du zuweisen möchtest!');

       if(!args.length) return message.channel.send('Benutze ,addrole <@user> <@rolle>');

       return message.channel.send(
           new Discord.MessageEmbed()
           .setColor('RED')
           .setDescription(`Das Teammitglied **${target.user.username}** hat nun den Rang ${role}! **Viel Glück!**`)
       )
       .then(target.roles.add(role));

    }
}