const discord = require('discord.js');
const client = new discord.Client();
const meme = require("./meme")
const PREFIX = '$'
// emitter.setMaxListeners(20)
const userCreatedPolls = new Map();
// const mySecret = process.env.TOKEN;
const giphy = require("./giphy");
const alive = require("./keepalive");
const image = require("./fun cmds/image");
const howhot = require("./fun cmds/howhot");
const dadjoke = require("./fun cmds/dadjoke");
const beer = require("./fun cmds/beer");
const reply = require('./fun cmds/reply');
const urban = require("./fun cmds/urban")
const insult = require('./fun cmds/insult'); 
// const bruh = require('./fun cmds/bruh'); 
const roast = require('./fun cmds/roast'); 
const mute = require('./mute');
const help = require('./help'); 
require('dotenv').config;
client.login('HIGHLY CONFIDENTIAL TOKEN');
const ban = require("./ban");
const poll = require("./poll");
client.on('message',poll);
client.on('message',ban);
client.on('message',dadjoke);
client.on('message',giphy);
client.on('message',howhot);
client.on('message',meme);
client.on('message',roast);
client.on('message',urban);
client.on('message',beer);
client.on('message',reply);
// client.on('message',bruh);
client.on('message',help);
client.on('message',insult);
client.on('message',mute);
client.on('message',image);
// client.on('message',spam);
// alive()
client.on('ready', () => {
  console.log(client.user.tag + " has logged in.")
  const arr = [
    '$help',
    'your conversations',
    `Over ${client.guilds.cache.size} servers!`,
    
  ]
  let index = 0;
  

  setInterval(() =>{
//     const arr = [
//     '$help'
//   ]
  let index = 0
    client.user.setActivity(arr[index],{ type:"WATCHING" }).catch(console.erorr)
    index++;

  },5000)
  });



