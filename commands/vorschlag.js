const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
    name: "vorschlag",
    description: "Wunsch Command",
    async execute(message, args) {
        const sayMessage = args.join(" ");
        const embedsay = new MessageEmbed()
        .setTitle(sayMessage)
        .setAuthor(message.author.username, message.member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor("#ff0000")
        .setFooter("Stimme unten ab!")

        message.channel.send(embedsay)
        .then(msg =>{
            msg.react('✅')
            .then(()=> msg.react('❌'))
        });
        
        message.delete().catch(err => console.log(err));
    }
}