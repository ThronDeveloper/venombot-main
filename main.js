const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'bilgilendirme',
    description: 'VenomBOT Hakkında Bazı Bilgileri Verir.',
  },
];

const rest = new REST({ version: '10' }).setToken("");

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1035631193288360009"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'bilgilendirme') {
    await interaction.reply('Selam, ben **VenomBOT** adlı discord botunun yapımcısı Thron. Sizlere botumuz hakkında bazı bilgiler vereceğim;\n\n> Botumuz kısa bir süreliğine yapım aşamasında, botumuz hakkında haberdar olmak için destek sunucumuza gelebilirsiniz. **LİNK EN AŞAĞIDADIR**\n> Botumuz yapım aşamasından çıktığında ilk olarak sadece moderasyon botu olarak kullanılacaktır, daha sonradan yeni özellikler eklemeyi planlıyoruz.\n> Botumuz yeni bir bot olduğundan tek geliştirici benim, eğer yazılım yeteneğiniz varsa sizi geliştirici ekibimizde görmekten onur duyarız. Topluluk sunucumuzdan başvuru yapabilirsiniz.\n> Topluluk Sunucumuz: <https://discord.gg/XPRCY2nRpN>');
  }
});

client.login("");