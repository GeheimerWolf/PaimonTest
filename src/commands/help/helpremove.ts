import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "remove",
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help Edit")
      .setDescription([
        "🔹 `p!remove (char name)`",
        "Removes a character from your profile."
      ])
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
