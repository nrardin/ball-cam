require("dotenv").config({ override: true });
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.once("ready", () => {
  console.log("Ready to ballchase!");
});

client.on("messageCreate", (msg) => {
  switch (msg.content) {
    case "!ballchase":
      msg.reply("Ready to ballchase!");
      break;
    case "!shittalk":
      msg.reply("what a save!");
      break;
    case "!jake":
      msg.reply("sup nerd");
      break;
  }
});
client.login(process.env.TOKEN);
