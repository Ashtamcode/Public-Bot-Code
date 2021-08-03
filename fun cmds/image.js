const { Canvas } = require('canvacord')
const PREFIX = '$'
const { MessageAttachment } = require("discord.js");
module.exports = async function(message){
  
 
  if(message.content === '$trigger'){
  const user = message.mentions.users.first() || message.author
  const avatar = user.displayAvatarURL({format:"png"})
  const image = await Canvas.trigger(avatar)
  message.channel.send(new MessageAttachment(image,"image.gif"))
  }
  if(message.content === '$wasted'){
    const user = message.mentions.users.first() || message.author
    const avatar = user.displayAvatarURL({format:"png"})
    const image = await Canvas.wasted(avatar)
    message.channel.send(new MessageAttachment(image,"image.gif"))
    }
  if(message.content === '$trash'){
  const user = message.mentions.users.first() || message.author
  const avatar = user.displayAvatarURL({format:"png"})
  const image = await Canvas.trash(avatar)
  message.channel.send(new MessageAttachment(image,"image.gif"))
      
    }
  if(message.content === '$affect'){
    const user = message.mentions.users.first() || message.author
    const avatar = user.displayAvatarURL({format:"png"})
    const image = await Canvas.affect(avatar)
    message.channel.send(new MessageAttachment(image,"image.gif"))
        
      }
  if(message.content === '$rip'){
    const user = message.mentions.users.first() || message.author
    const avatar = user.displayAvatarURL({format:"png"})
    const image = await Canvas.rip(avatar)
    message.channel.send(new MessageAttachment(image,"image.gif"))
        
      }
  if(message.content === '$beautiful'){
    const user = message.mentions.users.first() || message.author
    const avatar = user.displayAvatarURL({format:"png"})
    const image = await Canvas.beautiful(avatar)
    message.channel.send(new MessageAttachment(image,"image.gif"))
        
      }
  if(message.content === '$beautiful'){
    const user = message.mentions.users.first() || message.author
    const avatar = user.displayAvatarURL({format:"png"})
    const image = await Canvas.beautiful(avatar)
    message.channel.send(new MessageAttachment(image,"image.gif"))
        
      }
  if(message.content === '$hitler'){
    const user = message.mentions.users.first() || message.author
    const avatar = user.displayAvatarURL({format:"png"})
    const image = await Canvas.hitler(avatar)
    message.channel.send(new MessageAttachment(image,"image.gif"))
        
      }
  if(message.content === '$shit'){
    const user = message.mentions.users.first() || message.author
    const avatar = user.displayAvatarURL({format:"png"})
    const image = await Canvas.shit(avatar)
    message.channel.send(new MessageAttachment(image,"image.gif"))
        
      }
}