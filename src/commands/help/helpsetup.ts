import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "setup",
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help Profile")
      .setDescription([
        "🔹 `p!setup`",
        "Starts the profile setup progress",
      ])
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
