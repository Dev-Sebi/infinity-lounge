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
    name: "gecg",
    description: "Get an Image of a gecg (genetically engineered catgirl)!",
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
            .setTitle(`That good?`)
            .setImage(await( await neko.sfw.feed()).url)
            .setTimestamp()
        return interaction.reply({ embeds: [embed]});
    }
}