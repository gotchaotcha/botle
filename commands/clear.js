const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    usage: '.clear <amount>',
    description: 'clear messages',

    execute: async (message, args, client) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Ich hab dazu keine Rechte!");
        let amount = Math.floor(args[0]);
        if(!amount) return message.reply(`Bitte gebe eine Anzahl an!`);
        if(isNaN(amount)) return message.reply(`Gebe eine gültige Zahl an!`);
        if(amount > 100 || amount < 0) return message.reply(`Gebe eine Zahl zwischen 0 und 100 an!`);
        message.channel.bulkDelete(parseInt(amount + 1), true).catch(err => {
        message.channel.send(`Es können keine Nachrichten gelöscht werden welche älter als 14 Tage sind!`);
        }).then(messages => {
            message.channel.send(`Es wurden **erfolgreich** ${messages.size - 1} Nachrichten gelöscht!`)
        })
    }
}