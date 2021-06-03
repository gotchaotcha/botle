const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
    name: "news",
    description: "Wunsch Command",
    async execute(message, args) {
        const sayMessage = args.join(" ");
        const embedsay = new MessageEmbed()
        .setTitle("Neue Alpu-News:")
        .setDescription(sayMessage)
        .setAuthor(message.author.username, message.member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor("#ff0000")
        .setFooter("Alpu Server-Team")

        message.channel.send(embedsay)
        
        message.delete().catch(err => console.log(err));
    }
}