const Discord = require('discord.js');
const client = new Discord.Client();
const  ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

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
        setTimeout(() => message.delete(), 5000)
        
    }

    if (content === "!illo") {
        message.channel.send('Illo que pafaa');
    }

    if(message.content.startsWith('!skippy')) {

        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) {
            return message.channel.send('Illo, te tienes que conectar al chat de voz.');
        }

        const connection = voiceChannel.join();

        function videoFinder(query) {
            const videoResult = ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = videoFinder('el mensajero skippy')

        if (video) {
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave();
            });

            message.reply('Ha llegado el Skippy!')
        }
        
        
        
  
  }

})

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

client.login(process.env.TOKEN)

