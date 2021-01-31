import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "reset",
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help Reset")
      .setDescription([
        "🔹 `p!reset`",
        "Reset your whole profile."
      ])
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
