const Discord = require('discord.js')
const fs = require('fs');
const path = require('path');
const client = new Discord.Client();
const prefix = '-';
const express = require('express');
const app = express()
const port = 3000
var FortniteStatus = "Not Hosting";
const request = require('request');
const config = require('./configs/bot.json');
const { VoiceConnectionStatus } = require('@discordjs/voice');
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
  })
  
  client.commands = new Discord.Collection();
  
  
  const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
  for(const file of commandFiles){
      const command = require(`./commands/${file}`);
  
      client.commands.set(command.name, command);
  }

client.once("ready", () => {
    console.clear();
    console.log('active');
    client.user.setPresence({ activity: { type: "PLAYING", name: FortniteStatus}, status: "dnd"})
});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    switch(command) {
        case "ping":
            message.channel.send('pong!');
            break;
    }
});

client.login(config.token);