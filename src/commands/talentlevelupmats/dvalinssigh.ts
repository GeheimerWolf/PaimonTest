import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "dvalinssigh",
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Dvalin's Sigh")
      .setDescription([
        `**Rarity:** ⭐⭐⭐⭐⭐`,
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Dvalin's Sigh is used to level talents for the following characters:",
        "<:Amber:798579318262988810> Amber\n<:Beidou:798579120479928360> Beidou\n<:Chongyun:798579223241162792> Chongyun\n<:Traveler:798976293613600829> Traveler",
        "",
        "**Source:**",
        "Lv. 70+ Stormterror Challenge Reward",
        "",
        "**Description:**",
        "A bit of power taken from the whirlwinds evoked by the Dragon of the East.\nBeautiful and transparent, both trade winds and tornadoes will work in its name. The winds moves as its companion, its voice, and its freedom.\nIts enemies are the thousands who stand against the wind.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Dvalin%27s_Sigh.png/revision/latest/scale-to-width-down/256?cb=20210106070339",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Dvalin%27s_Sigh.png/revision/latest/scale-to-width-down/256?cb=20210106070339",
      )
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
