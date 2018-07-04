// discord.js モジュールのインポート
const Discord = require('discord.js');

// Discord Clientのインスタンス作成
const client = new Discord.Client();

// トークンの用意
const token = 'ここにアクセストークンを入れる';

// 準備完了イベントのconsole.logで通知黒い画面に出る。
client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);

    client.user.setActivity('スーモ',{
        type: 'PLAYING'
    });
});

// メッセージがあったら何かをする
client.on('message', message => {
    // 再発防止
    if (message.author.id === client.user.id) {
        return;
    }

    var voiceChannel = message.member.voiceChannel;

    if(message.content === 'あ！スーモ！'){
        if(!voiceChannel){
            message.channel.send('あ:exclamation:スーモ:exclamation::new_moon_with_face:ダン:boom:ダン:boom:ダン:boom:シャーン:notes:スモ:full_moon_with_face:スモ:new_moon_with_face:スモ:full_moon_with_face:スモ:new_moon_with_face:スモ:full_moon_with_face:スモ:new_moon_with_face:ス～～～モ:arrow_heading_up:スモ:new_moon_with_face:スモ:full_moon_with_face:スモ:new_moon_with_face:スモ:full_moon_with_face:スモ:new_moon_with_face:スモ:full_moon_with_face:ス～～～モ:arrow_heading_down::sun_with_face:')
            return;
        }
        voiceChannel.join().then(connection => {
            message.channel.send(':new_moon_with_face:ダン:boom:ダン:boom:ダン:boom:シャーン:notes:スモ:full_moon_with_face:スモ:new_moon_with_face:スモ:full_moon_with_face:スモ:new_moon_with_face:スモ:full_moon_with_face:スモ:new_moon_with_face:ス～～～モ:arrow_heading_up:スモ:new_moon_with_face:スモ:full_moon_with_face:スモ:new_moon_with_face:スモ:full_moon_with_face:スモ:new_moon_with_face:スモ:full_moon_with_face:ス～～～モ:arrow_heading_down::sun_with_face:')
            const dispatcher = connection.playFile('スーモの曲(mp3)のファイル名を入れる');
            //mp3ファイルはbot.jsがあるフォルダに置いてください
            dispatcher.on('end', reason => {
                connection.disconnect();
            });
        });
    }

    else{
        message.channel.send('あ:exclamation:スーモ:exclamation::new_moon_with_face:ダン:boom:ダン:boom:ダン:boom:シャーン:notes:スモ:full_moon_with_face:スモ:new_moon_with_face:スモ:full_moon_with_face:スモ:new_moon_with_face:スモ:full_moon_with_face:スモ:new_moon_with_face:ス～～～モ:arrow_heading_up:スモ:new_moon_with_face:スモ:full_moon_with_face:スモ:new_moon_with_face:スモ:full_moon_with_face:スモ:new_moon_with_face:スモ:full_moon_with_face:ス～～～モ:arrow_heading_down::sun_with_face:')
    }

});
// Discordへの接続
client.login(token);
