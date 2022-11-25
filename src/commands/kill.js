const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


module.exports = {
    data: new SlashCommandBuilder()
    .setName("kill")
    .setDescription("Kills a user.")
    .addUserOption(option => option.setName('target').setDescription("The user to kill.") && option.setRequired(true)),

    async execute(interaction) {

        const data = await fetch("https://anime-api.hisoka17.repl.co/img/kill")
        .then((response) => response.json())

        const embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setImage(data.url)
        
        await interaction.reply({
            content: `${interaction.user} kills ${interaction.options.getUser('target')}`, 
            embeds: [embed]})
        .catch(console.error)
    }
}