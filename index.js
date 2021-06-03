const Discord = require('discord.js')
const prefix = ',';
const fs = require('fs');
const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: true});

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles)
{
   const command = require(`./commands/${file}`)

   client.commands.set(command.name, command)
}
console.log('main.js ready')
client.on('message', async(message) => {
   if(message.author.bot) return;
   if(message.content.indexOf(prefix) !== 0) return;

   const args = message.content.slice(prefix.length).trim().split(/ +/g)
   const command = args.shift().toLowerCase()


   if(command === 'news')
   {
      client.commands.get('news').execute(message, args)
   }

   if(command === 'clear')
   {
      client.commands.get('clear').execute(message, args)
   }

   if(command === 'vorschlag')
   {
      client.commands.get('vorschlag').execute(message, args)
   }
   
   if(command === 'nachricht')
   {
      client.commands.get('nachricht').execute(message, args)
   }

   if(command === 'team')
   {
      client.commands.get('team').execute(message, args)
   }

   if(command === 'addrole')
   {
      client.commands.get('addrole').execute(message, args)
   }

   if(command === 'removerole')
   {
      client.commands.get('removerole').execute(message, args)
   }
})

client.once('ready', () => {
   console.log('Bot ist online!')
});

client.login('ODQ4MjU0MTQ5MTE1OTA0MDYy.YLJ8PA._In3jWuIW40AUe3opB9LFoMwBYI')
