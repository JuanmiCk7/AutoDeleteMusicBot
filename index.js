const Discord = require('discord.js');
const client = new Discord.Client();


const words = ['!play', '=play', '-play', '!skip', '-skip', '=skip']

client.on('ready', () => {
    console.log('The client is ready!')

})

client.on('message', message => {
    if (message.member.permissions.has('SEND_MESSAGES') && message.member.permissions.has('MANAGE_MESSAGES') && message.member.permissions.has('CONNECT') && message.member.permissions.has('SPEAK')) {

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
        setTimeout(() => message.delete(), 5000)
        
    }

    if (content === "!illo") {
        message.channel.send('Illo que pafaa');
    }

    if(message.content.startsWith('!skippy')) {

        if (!message.member.voice.channel) return message.reply("Tienes q estar en un canal brode!");
        // Checking if the bot is in a voice channel.
        if (message.guild.me.voice.channel) return message.reply("Illo, que ya estoy aqui!");

        // Joining the channel and creating a VoiceConnection.
        message.member.voice.channel.join().then(VoiceConnection => {

        // Playing the music, and, on finish, disconnecting the bot.
        VoiceConnection.play("./resources/skippy.mp3").on("finish", () => VoiceConnection.disconnect());
            message.reply("Ha llegado Skippy!");
        }).catch(e => console.log(e))
    }

  
  } else {
      console.log('The bot dont have permission!')
  }

})

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

client.login(process.env.TOKEN)

