const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
  client.user.setStatus("DND")
});

client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "fort")) {
  const emoji = "1⃣"
message.channel.send('**اضغط الاموجي للحصول على رتبه**')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "Fortnite");
message.guild.member(message.author).addRole(role);

});
});
});
}
});

client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "min")) {
  const emoji = "2⃣"
message.channel.send('**اضغط الاموجي للحصول على رتبه**')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "Minecraft");
message.guild.member(message.author).addRole(role);

});
});
});
}
});


client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "black")) {
  const emoji = "3⃣"
message.channel.send('**اضغط الاموجي للحصول على رتبه**')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "✦ Blacksquad");
message.guild.member(message.author).addRole(role);

});
});
});
}
});

client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "CS:GO")) {
  const emoji = "4⃣"
message.channel.send('**اضغط الاموجي للحصول على رتبه**')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "✦ CS:GO");
message.guild.member(message.author).addRole(role);

});
});
});
}
});

client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "Palad")) {
  const emoji = "5⃣"
message.channel.send('**اضغط الاموجي للحصول على رتبه**')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "✦ Paladins");
message.guild.member(message.author).addRole(role);

});
});
});
}
});

client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "PUB")) {
  const emoji = "6⃣"
message.channel.send('**اضغط الاموجي للحصول على رتبه**')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "✦ PUBG");
message.guild.member(message.author).addRole(role);

});
});
});
}
});


















client.login(process.env.BOT_TOKEN);
