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
    name: "girl-solo",
    description: "Gets you Images of girls (NSFW)",
    type: 1,

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    
    execute: async (client, interaction, args) => {

        if(interaction.channel.nsfw)
        {
            const embed = new Discord.MessageEmbed()
                .setColor(colors.Purple)
                .setDescription(`You Like that don't you?`)
                .setImage(await(await neko.nsfw.girlSolo()).url)
                .setTimestamp()
            return interaction.reply({ embeds: [embed]});
        }
        else
        {
            await interaction.reply(`${client.emojis.cache.get(emojis.Bot_Emergency).toString()} This Channel is not an NSFW Channel, Please enable NSFW for this channel or switch to one that has NSFW enabled!`)
        }
    }
}