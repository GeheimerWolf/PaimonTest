import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "dvalinsplume",
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Dvalin's Plume")
      .setDescription([
        `**Rarity:** ⭐⭐⭐⭐⭐`,
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Dvalin's Plume is used to level talents for the following characters:",
        "<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:Jean:798578932031029308> Jean",
        "",
        "**Source:**",
        "Lv. 70+ Stormterror Challenge Reward",
        "",
        "**Description:**",
        "A feather from the tail of the Dragon of the East.\nAs a dragon's feather it has experienced more than a thousand years' worth of winds. Its ambition to be free almost evokes light breezes to break it off its current shackles, but its previous owner's recognition of you has kept it in your hands.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Dvalin%27s_Plume.png/revision/latest/scale-to-width-down/256?cb=20210106070312",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Dvalin%27s_Plume.png/revision/latest/scale-to-width-down/256?cb=20210106070312",
      )
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
