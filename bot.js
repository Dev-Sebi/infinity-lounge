"use strict";
console.clear()
require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_EMOJIS_AND_STICKERS",
  ],
});
module.exports = client;

client.ArrayOfApplicationCommands = new Discord.Collection();

require("./handler")(client);

client.login(process.env.TOKEN);


const express = require('express')
const app = express()
const port = 1026

app.get('/stats', (req, res) => {
  
  const format = `en-US`
  const servers = new Intl.NumberFormat(format).format(client.guilds.cache.size)
  const users = new Intl.NumberFormat(format).format(client.guilds.cache.reduce((a, g) => a + g.memberCount, 0))
  const averageUsers = new Intl.NumberFormat(format).format(((client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)) / client.guilds.cache.size).toFixed(0))
  
  const json = {
    bot: client.user.username,
    servers: servers,
    users: users,
    averageUsers: averageUsers,
  }
  
  res.send(json)
})

app.listen(port, () => {
  console.log(`API launched on port ${port}`)
})