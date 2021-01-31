import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "list",
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help List")
      .setDescription([
        "🔹 `p!list artifacts`",
        "🔹 `p!list food`",
        "🔹 `p!list gadgets`",
        "🔹 `p!list materials`",
        "🔹 `p!list weapons`",
      ])
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
