import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "edit",
  aliases: ["add"],
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help Edit/Add")
      .setDescription([
        "🔹 `p!edit uid (UID)`",
        "🔹 `p!edit [ar | adventurerrank] (1-60)`",
        "🔹 `p!edit [wl | worldlevel] (0-8)`",
        "🔹 `p!edit [char | character] (char name) (constellation 0-6)`",
        "",
        "🔹 `p!add uid (UID)`",
        "🔹 `p!add [ar | adventurerrank] (1-60)`",
        "🔹 `p!add [wl | worldlevel] (0-8)`",
        "🔹 `p!add [char | character] (char name) (constellation 0-6)`",
      ])
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
