const Discord = require('discord.js')
const client = new Discord.Client()
//const config = require('./config.json')
//const words = ['!play', '=play', '-play']

client.on('ready', () => {
    console.log('The client is ready!')

})

/*client.on('message', message => {
    var content = message.content;

    for (var i = 0; i < words.length; i++) {
        if (content.includes(words[i])) {
            message.delete()
            break
        }
    }

    if (message.author.id === '185476724627210241') {
        message.delete()
    }
})
*/
client.login(process.env.TOKEN)

