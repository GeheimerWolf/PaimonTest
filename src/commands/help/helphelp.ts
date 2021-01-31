import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "help",
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help Help")
      .setDescription([
        "🔹 `p!hlep edit`",
        "🔹 `p!help [gadgets | gadget]`",
        "🔹 `p!help help`",
        "🔹 `p!help [materials | material]`",
        "🔹 `p!help profile`",
        "🔹 `p!help remove`",
        "🔹 `p!help reset`",
        "🔹 `p!help setup`",
      ])
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
