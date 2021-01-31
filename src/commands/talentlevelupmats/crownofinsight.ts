import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "crownofinsight",
  aliases: ["crown"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Crown of Insight")
      .setDescription([
        `**Rarity:** ⭐⭐⭐⭐⭐`,
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "**Used for:** Level-Up Combat Talents from Level 9 to 10",
        "",
        "**Source:**\n1.) Frostbearing Tree (upgrade to Level 11)\n2.) Limited-duration Event reward",
        "",
        "**Description:**\nOnce a medium for the storage and transfer of wisdom in ancient times. Now wisdom is found in ancient texts and in profound speech. Nevertheless, this Crown of Insight must still be able to impart some transcendent power and wisdom to its bearer.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/04/Item_Crown_of_Insight.png/revision/latest/scale-to-width-down/256?cb=20201115225803",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/04/Item_Crown_of_Insight.png/revision/latest/scale-to-width-down/256?cb=20201115225803",
      )
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
