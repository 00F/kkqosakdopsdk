const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['463698464845594628','320423357709549568'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("--",{type: 'LISTENING'})
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Rwt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("dnd")
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('Rls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("dnd")
    message.channel.send(` ${argresult} \` `)
} else 
  if (message.content.startsWith('Rpl')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("dnd")
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('Rst')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MeeRcY");
  client.user.setStatus("dnd")
   message.channel.send(`${argresult} \` `)
}
});

client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === '..1') {
  let channel = client.channels.get('511456874281959425');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    
  }
          
});
client.login(process.env.BOT_TOKEN);
