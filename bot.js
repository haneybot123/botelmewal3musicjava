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
});

client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "fortnite")) {
  const emoji = "1⃣"
message.channel.send('**fortnite اللحصول علي رتبة **')
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
       if(message.content.startsWith(prefix + "minecraft")) {
  const emoji = "2⃣"
message.channel.send('**minecraft اللحصول علي رتبة **')
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
       if(message.content.startsWith(prefix + "overwatch")) {
  const emoji = "3⃣"
message.channel.send('**overwatch اللحصول علي رتبة **')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "Overwatch");
message.guild.member(message.author).addRole(role);

});
});
});
}
});

client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "roblox")) {
  const emoji = "4⃣"
message.channel.send('**Roblox اللحصول علي رتبة **')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "Roblox");
message.guild.member(message.author).addRole(role);

});
});
});
}
});

client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "pubg")) {
  const emoji = "5⃣"
message.channel.send('**pubg اللحصول علي رتبة **')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "PUBG");
message.guild.member(message.author).addRole(role);

});
});
});
}
});

client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "blacksqaud")) {
  const emoji = "6⃣"
message.channel.send('**blacksqaud اللحصول علي رتبة **')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "Blacksquad");
message.guild.member(message.author).addRole(role);

});
});
});
}
});

client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "CS:GO")) {
  const emoji = "7⃣"
message.channel.send('**CS:GO اللحصول علي رتبة **')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "CS:GO");
message.guild.member(message.author).addRole(role);

});
});
});
}
});

client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "brawlhalla")) {
  const emoji = "8⃣"
message.channel.send('**brawlhalla اللحصول علي رتبة **')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "Brawlhalla");
message.guild.member(message.author).addRole(role);

});
});
});
}
});



client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "GTA V" )) {
  const emoji = "9⃣"
message.channel.send('**GTA V اللحصول علي رتبة **')
.then( msg => {
msg.react(emoji).then( r => {
  const mis = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const swe = msg.createReactionCollector(mis, { time: 10000 });
  swe.on('collect', r => {

let role = message.guild.roles.find("name", "GTA V");
message.guild.member(message.author).addRole(role);

});
});
});
}
});

















const adminprefix = "$";
const devs = ['454527533279608852'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});











client.login(process.env.BOT_TOKEN);
