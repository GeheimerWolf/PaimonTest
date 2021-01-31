import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "profile",
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help Profile")
      .setDescription([
        "🔹 `p!profile`",
        "Shows your own profile. If you didn't set it up, you receive the setup via DM.",
        "",
        "🔹 `p!profile [@user | userID]`",
        "Shows the profile of the user."
      ])
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
