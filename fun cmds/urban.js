const Discord = require("discord.js");
const urban = require("relevant-urban");
const PREFIX = '$'
module.exports = async function(message) {
    let tokens = message.cleanContent.split(" ");
    if (tokens[0] === '$urban') {
        // let tokens = message.cleanContent.split(" ");
        let keywords = "sacry";
        if (tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join(" ");
        }
        console.log(keywords)

        if (!keywords) return message.channel.send("Please give a query");
        let result = await urban(keywords).catch(e => {
            return message.channel.send(`Unknown word **${keywords}**`);
        })

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(result.wordBreak = 'break-all')
            .setURL(result.urbanURL)
            .setDescription(`**Defination** \n ${result.definition} \n **Example** \n ${result.example}`)
        return message.channel.send(embed)
    }
}
