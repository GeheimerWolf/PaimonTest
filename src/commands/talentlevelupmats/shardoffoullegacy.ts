import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "shardofafoullegacy",
  aliases: ["foullegacy"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Shard of a Foul Legacy")
      .setDescription([
        `**Rarity:** ⭐⭐⭐⭐⭐`,
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Shard of a Foul Legacy is used to level talents for the following characters:",
        "<:Diona:798582510480785409> Diona\n<:Childe:798579167843057665> Tartaglia",
        "",
        "**Source:**",
        "Lv. 70+ Childe Challenge Reward",
        "",
        "**Description:**",
        "A bit of the Great Wolf King of the North's power drawn from its soul. This land was once a realm of sub-zero blizzards and ice storms filled with razor-sharp ice shards, all at the command of Boreas. In its final moments, it finally realized the chilling north wind could only extinguish life, not nurture it; therefore, Boreas let its powers freely flow into the land to protect it and its inhabitants.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/48/Item_Shard_of_a_Foul_Legacy.png/revision/latest/scale-to-width-down/256?cb=20210106065904",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/48/Item_Shard_of_a_Foul_Legacy.png/revision/latest/scale-to-width-down/256?cb=20210106065904",
      )
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
