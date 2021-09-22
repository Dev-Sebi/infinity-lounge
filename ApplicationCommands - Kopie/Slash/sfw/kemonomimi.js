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
    name: "kemonomimi",
    description: "Gets you a kemonomimi Image!",
    type: 1,

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    
    execute: async (client, interaction, args) => {

        const embed = new Discord.MessageEmbed()
            .setColor(colors.Purple)
            .setTitle(`Here ya go!`)
            .setImage(await( await neko.sfw.kemonomimi()).url)
            .setTimestamp()
        return interaction.reply({ embeds: [embed]});
    }
}