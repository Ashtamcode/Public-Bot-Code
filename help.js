const Discord = require('discord.js');
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = '$'
const userCreatedPolls = new Map();
module.exports = async function(msg){
  let user = msg.author
  let avatar = user.displayAvatarURL({dynamic:true})
  let tokens = msg.cleanContent.split(" ");
  let keywords = "scary";
  if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(" ");
    }
  if (msg.content === '$help'){
  const helpembedbasic = new Discord.MessageEmbed()
    .setColor('#E96A00')
    .setTitle('Commandlist: Basic')
    .setDescription('**Type <module> for more help**')
    .setThumbnail(avatar)
    .addFields(
      { name: '**Fun**', value: 'Shows a list of all the fun commands.' },
      { name: '**Meme**', value: 'More about meme command' },
      { name: '**Mod**', value: 'All admin commands' },
      { name: '**Image**', value: 'All image commands' },
    )
    .setFooter('Sassy bot • Help Menu')
  msg.channel.send(embed=helpembedbasic)
  }
  if(msg.content.toLowerCase() === 'fun'){
    const e = new Discord.MessageEmbed()
    .setColor('#E96A00')
    .setTitle('Commandlist: Fun')
    
    .setThumbnail(avatar)
    .addFields(
      { name: '**$beer**', value: 'Give a beer.' },
      { name: '**$dadjoke**', value: 'Gives a classic dad joke' },
      { name: '**$howhot**', value: 'Returns how hot are you! 😍' },
      { name: '**$insult**', value: 'Insults the person you mention' },
      { name: '**$roast**', value: 'Roasts you' },
    )
    .setFooter('Sassy bot • Help Menu')
    msg.channel.send(embed=e)
  }
  if (msg.content.toLowerCase() === 'meme'){
    const e = new Discord.MessageEmbed()
    .setColor('#E96A00')
    .setTitle('Commandlist: Meme')
    
    .setThumbnail(avatar)
    .addFields(
      { name: '**$meme**', value: 'Returns a meme' },
      { name: '‎**More comming**', value: 'more meme cmds will be there soon‎' },
    )
    .setFooter('Sassy bot • Help Menu')
    msg.channel.send(embed=e)
  }
  if (msg.content.toLowerCase() === 'mod'){
    const e = new Discord.MessageEmbed()
    .setColor('#E96A00')
    .setTitle('Commandlist: Mod')
    
    .setThumbnail(avatar)
    .addFields(
      { name: '**$ban Member ID**', value: 'Bans the member' },
      { name: '‎**$kick Member ID**', value: 'Kicks the member' },
      { name: '‎**$mute Member Mention**', value: 'Mutes the member for time specified' },
      { name: '‎**$poll #<channel> poll message**', value: 'Creates a poll' },
    )
    .setFooter('Sassy bot • Help Menu')
    msg.channel.send(embed=e)
  }
  if (msg.content.toLowerCase() === 'image'){
    const e = new Discord.MessageEmbed()
    .setColor('#E96A00')
    .setTitle('Commandlist: Image')
    
    .setThumbnail(avatar)
    .addFields(
    
      { name: '**$trigger**', value: '\u200B' ,inline:true},
      { name: '‎**$wasted**', value: '\u200B' ,inline:true},
      { name: '‎**$affect**', value: '\u200B',inline:true },
      { name: '‎**$rip**', value: '\u200B',inline:true },
      { name: '‎**$beautiful**', value: '\u200B',inline:true },
      { name: '‎**$hitler**', value: '\u200B',inline:true },
      { name: '‎**$shit**', value: '\u200B',inline:true },
    )
    .setFooter('Sassy bot • Help Menu')
    msg.channel.send(embed=e)
  }
}