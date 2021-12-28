const Discord = require('discord.js');
const client = new Discord.Client()

const words = ['!play', '=play', '-play']

client.on('ready', () => {
    console.log('The client is ready!')

})

client.on('message', message => {
    var content = message.content;

    for (var i = 0; i < words.length; i++) {
        if (content.includes(words[i])) {
            console.log('Delete message!')
            message.delete()
            break
        }
    }

    if (message.author.id === '185476724627210241') {
        console.log("Message from Ayana!")
        message.delete()
    }

    if (message.content === '!skippy') {
        client.channels.cache.get('general').send("¿Quién es el mensajero de Dios?. ¿Y quién es el mensajero del mensajero de Dios?. Estamos en apoclipsis...")
    }
})

client.login(process.env.TOKEN)

