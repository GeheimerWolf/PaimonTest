import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "spiritlocketofboreas",
  aliases: ["spiritlocket"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spirit Locket of Boreas")
      .setDescription([
        `**Rarity:** ⭐⭐⭐⭐⭐`,
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Spirit Locket of Boreas is used to level talents for the following characters:",
        "<:Fischl:798579031381114890> Fischl\n<:Kaeya:798578983775240242> Kaeya\n<:Ningguang:798571977120022578> Ningguang\n<:Sucrose:798578072756158475> Sucrose",
        "",
        "**Source:**",
        "Lv. 70+ Wolf of the North Challenge Reward",
        "",
        "**Description:**",
        "A bit of the Great Wolf King of the North's power drawn from its soul. This land was once a realm of sub-zero blizzards and ice storms filled with razor-sharp ice shards, all at the command of Boreas. In its final moments, it finally realized the chilling north wind could only extinguish life, not nurture it; therefore, Boreas let its powers freely flow into the land to protect it and its inhabitants.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/8/81/Item_Spirit_Locket_of_Boreas.png/revision/latest/scale-to-width-down/256?cb=20210106070646",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/8/81/Item_Spirit_Locket_of_Boreas.png/revision/latest/scale-to-width-down/256?cb=20210106070646",
      )
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
