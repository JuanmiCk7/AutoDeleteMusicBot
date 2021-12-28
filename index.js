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
        await sleep(5000)
        message.delete()
    }

    if (content === "!illo") {
        message.channel.send('Illo que pasa!');
    }

    /*if(message.content.startsWith('!skippy')) {

        if(!message.member.voice) {
            return message.channel.send('Illo, te tienes que conectar al chat de voz.');
        }
        

        message.member.voice.joinVoiceChannel()
          .then(connection => { 
  
              console.log("Ha llegado el Skippy!");
  
              const dispatcher = connection.playFile(require("path").join(__dirname, './resources/skippy.mp3'));
  
              dispatcher.on('start', () => { //not working
                  dispatcher.setVolume(0.70);
                  console.log("Playing");
              }); 
  
              dispatcher.on('error', (err) => console.log(err)); //no errors
  
              dispatcher.on('end', end => { //working fine
                  console.log("Finished");
                  console.log("End: " + end);
                  message.member.voiceChannel.leave()
              });
          });
  
  }*/

})

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

client.login(process.env.TOKEN)

