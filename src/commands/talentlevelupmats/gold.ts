import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "gold",
  aliases: ["teachingsofgold", "guidetogold", "philosophiesofgold"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Teachings of Gold")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Teachings of Gold is used to level talents for the following characters:",
        "<:Beidou:798579120479928360> Beidou\n<:Xingqiu:798577525265399838> Xingqiu\n<:Xinyan:798577406427529246> Xinyan\n<:Zhongli:798577390577254441> Zhongli",
        "",
        "**Source:**",
        "Taishan Mansion *(Wednesday/Saturday/Sunday)*",
        "",
        "**Description:**",
        "Gold is the symbol of the Land of the Earth.\nGold is the blood flowing deep under the land of Liyue, is the muscles that pump Liyue's heart, and the bones that make Liyue stand proud.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Item_Teachings_of_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106072309",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Item_Teachings_of_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106072309",
      )
      .setFooter("Page 1/3")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Guide to Gold")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Guide to Gold is used to level talents for the following characters:",
        "<:Beidou:798579120479928360> Beidou\n<:Xingqiu:798577525265399838> Xingqiu\n<:Xinyan:798577406427529246> Xinyan\n<:Zhongli:798577390577254441> Zhongli\n<:Traveler:798976293613600829> Traveler",
        "",
        "**Source:**",
        "Taishan Mansion *(Wednesday/Saturday/Sunday)*\n**Crafting:** 3x Teachings of Gold, 175 Mora",
        "",
        "**Description:**",
        "Gold is the symbol of the Land of the Earth.\nGold symbolizes conversion. This is the unspoken understanding between Liyue's mountains, land, city, and its people. In Liyue, industriousness is converted to gold, and gold to prosperity.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/43/Item_Guide_to_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106072319",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/43/Item_Guide_to_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106072319",
      )
      .setFooter("Page 2/3")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Philosophies of Gold")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Philosophies of Gold is used to level talents for the following characters:",
        "<:Beidou:798579120479928360> Beidou\n<:Xingqiu:798577525265399838> Xingqiu\n<:Xinyan:798577406427529246> Xinyan\n<:Zhongli:798577390577254441> Zhongli\n<:Traveler:798976293613600829> Traveler",
        "",
        "**Source:**",
        "Taishan Mansion *(Wednesday/Saturday/Sunday)*\n**Crafting:** 3x Guide to Gold, 550 Mora",
        "",
        "**Description:**",
        "Gold is the symbol of the Land of the Earth.\nGold is the wealth of Liyue, but Liyue's true wealth is the hearts of its people that shine like gold.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Item_Philosophies_of_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106064435",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Item_Philosophies_of_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106064435",
      )
      .setFooter("Page 3/3")
      .setColor("RANDOM");

    createPagination(message, [firstEmbed, secondEmbed, thirdEmbed]);
  },
});

export async function createPagination(
  message: Message,
  embeds: Embed[],
  page = 1,
): Promise<void> {
  if (embeds.length === 0) {
    return;
  }

  const { channelID, author } = message;

  let currentPage: number = page - 1;

  let embedMessage = await sendEmbed(channelID, embeds[currentPage]);

  if (!embedMessage) {
    return;
  }

  if (embeds.length <= 1) {
    return;
  }

  try {
    addReactions(
      embedMessage.channelID,
      embedMessage.id,
      ["⏮️", "◀️", "▶️", "⏭️"],
      true,
    );
  } catch (e) {
    console.error(e);
    return;
  }

  while (true) {
    if (!embedMessage) {
      return;
    }
    const reaction = await needReaction(author.id, embedMessage.id);

    if (!reaction) {
      return;
    }

    if (
      !(removeUserReaction(
        message.channelID,
        embedMessage.id,
        reaction,
        message.author.id,
      ).catch(console.error))
    ) {
      return;
    }

    if (reaction === "◀️") {
      currentPage--;
    } else if (reaction === "▶️") {
      currentPage++;
    } else if (reaction === "⏮️") {
      currentPage = 0;
    } else if (reaction === "⏭️") {
      currentPage = embeds.length - 1;
    } else {
      continue;
    }

    if (currentPage < 0) {
      currentPage = 0;
    }

    if (currentPage > embeds.length - 1) {
      currentPage = embeds.length - 1;
    }

    if (!embedMessage) {
      return;
    }

    if (
      !(await editEmbed(embedMessage, embeds[currentPage]).catch(console.error))
    ) {
      return;
    }
  }
}
