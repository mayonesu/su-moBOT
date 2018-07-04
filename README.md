# su-moBOT

## Description
これはDiscord用のBOTスクリプトです。
あらかじめNode.jsをインストールしなければなりません。
インストール方法や実行方法は各自で調べてください

## Install
ここでのインストールはNode.jsをインストール済みであることを前提に説明します。

BOTアカウントの作成はこちらのサイトを参考にしてやってみてください。
https://liginc.co.jp/370260

パッケージのインストールについては、以下の3つのパッケージをインストールしてください。以下のコマンドを入れて実行してください。
npm install discord.js ffmpeg-binaries opusscript

念のためパッケージのアップデートをしておくことをおすすめします。
npm update discord.js ffmpeg-binaries opusscript

インストールが完了したら
node bot.js
を実行して自分の立てたサーバーにログインされていることを確認し、メッセージを送信して
BOTから返ってくれば成功です。
