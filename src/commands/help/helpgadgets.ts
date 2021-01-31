import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "gadget",
  aliases: ["gadget"],
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help Gadgets")
      .setDescription([
        "🔹 `p!gadget geoculusresonancestone`",
        "🔹 `p!gadget anemoculusresonancestone`",
        "🔹 `p!gadget adeptiseekersstove`",
        "🔹 `p!gadget warmingbottle`",
        "",
        "**Talent Level-Up Materials**",
        "🔹 `p!gadget condensedresin`",
        "🔹 `p!gadget windcatcher`",
        "🔹 `p!gadget nre`",
        "🔹 `p!gadget geotreasuregompass`",
        "🔹 `p!gadget anemotreasurecompass`",
        "🔹 `p!gadget portablewaypoint`",
        "🔹 `p!gadget kamera`",
        "🔹 `p!gadget miniseeliecurcuma`",
        "🔹 `p!gadget miniseeliedayflower`",
        "🔹 `p!gadget miniseelierose`",
        "🔹 `p!gadget treasureseekingseelie`",
      ])
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
