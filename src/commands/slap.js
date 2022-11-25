const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    data: new SlashCommandBuilder()
    .setName('slap')
    .setDescription('Slap a user.')
    .addUserOption(option => option.setName('target').setDescription("User to slap.") && option.setRequired(true)),

    async execute(interaction) {

        const data = await fetch('https://anime-api.hisoka17.repl.co/img/slap')
        .then((response) => response.json())

        const embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setImage(data.url)
        
        await interaction.reply({
            content: `${interaction.user} slaps ${interaction.options.getUser('target')}`, 
            embeds: [embed]})
        .catch(console.error)

    }
}