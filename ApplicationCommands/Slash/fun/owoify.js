require("dotenv").config();
const { Client, CommandInteraction } = require("discord.js");
const Discord = require("discord.js");
const fetch = require('node-fetch');
const emojis = require("../../../utils/emojis");
const colors = require("../../../utils/colors");
const con = require("../../../database/connection");
const wait = require('util').promisify(setTimeout);
const moment = require('moment');
const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: "owoify",
    description: '"Owoifies" a Text',
    type: 1,
    options: [
        {
            name: "text",
            description: "A Text I should Owoify",
            type: 3,
            required: true,
        }
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    
    execute: async (client, interaction, args) => {

        const embed = new Discord.MessageEmbed()
            .setColor(colors.Purple)
            .setTitle(`OwO!`)
            .setDescription(await( await neko.sfw.OwOify({text: args[0]})).owo)
            .setTimestamp()
        return interaction.reply({ embeds: [embed]});
    }
}