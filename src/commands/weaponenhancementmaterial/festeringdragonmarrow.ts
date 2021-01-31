import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "festeringdragonmarrow",
  aliases: ["festeringdragon", "dragonmarrow"],
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
    .setTitle("Festering Dragon Marrow")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐",
      "",
      "**Item type:** Weapon Enhancement Material",
      "",
      "**Source:**",
      "The Chalk Prince and the Dragon Event Shops",
      "",
      "**Description:**",
      "Specialized refinement material for Festering Desire. This is the product of purifying Durin's vile venom, which has seeped into and spread throughout Dragonspine's ley lines. By using it on a bloodthirsty sword with a strong affinity for such materials, you can increase that sword's power."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/41/Item_Festering_Dragon_Marrow.png/revision/latest/scale-to-width-down/256?cb=20201223021635")
    .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
