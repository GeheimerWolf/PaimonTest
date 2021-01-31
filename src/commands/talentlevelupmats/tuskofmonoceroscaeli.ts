import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "tuskofmonoceroscaeli",
  aliases: ["tuskofmonoceros", "monoceroscaeli", "monoceros"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Tusk of Monoceros Caeli")
      .setDescription([
        `**Rarity:** ⭐⭐⭐⭐⭐`,
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Tusk of Monoceros Caeli is used to level talents for the following characters:",
        "<:Albedo:798579345916559370> Albedo\n<:Xinyan:798577406427529246> Xinyan\n<:Zhongli:798577390577254441> Zhongli",
        "",
        "**Source:**",
        "Lv. 70+ Childe Challenge Reward",
        "",
        "**Description:**",
        "The horn of a whale that you obtained from defeating Childe, who had unleashed the might of his Delusion.\nIt is said that the shape of one's constellation determines one's character. The image of a whale cruising across the celestial heights represents a solipsism that seeks to crush and devour all in its path.\nEmbracing this aspect of himself, Childe gleefully summoned one such beast before throwing himself into battle against you.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Item_Tusk_of_Monoceros_Caeli.png/revision/latest/scale-to-width-down/256?cb=20210106065134",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Item_Tusk_of_Monoceros_Caeli.png/revision/latest/scale-to-width-down/256?cb=20210106065134",
      )
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
