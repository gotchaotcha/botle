const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
    name: "team",
    description: "Wunsch Command",
    async execute(message, args) {
        const sayMessage = args.join(" ");
        const embedsay = new MessageEmbed()
        .setTitle("Neuer Team-Log:")
        .setDescription(sayMessage)
        .setAuthor(message.author.username, message.member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor("#ff0000")
        .setFooter("Alpu Server-Team")

        message.channel.send(embedsay)
        
        message.delete().catch(err => console.log(err));
    }
}