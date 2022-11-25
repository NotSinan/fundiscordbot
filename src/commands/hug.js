const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


module.exports = {
    data: new SlashCommandBuilder()
    .setName("hug")
    .setDescription("Hugs a user."),

    async execute(interaction) {

        const data = await fetch("https://anime-api.hisoka17.repl.co/img/hug")
        .then((response) => response.json())

        const embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setDescription()
        await interaction.reply(data.url)
    }
}