import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "prithivatopaz",
  aliases: ["pt", "prithiva"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Prithiva Topaz")
      .setDescription([
        "**Prithiva Topaz** are gemstones of varying quality used in the ascension of characters.\n\n**Prithiva Topaz** is associated with the Geo element.\n\nCan be obtained from the Geo Hypostasis, Wolf of the North Challenge, Souvenir Shop and Alchemy.\n\n**Element:** <:Geo:798483630740865044> Geo",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Item_Prithiva_Topaz_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074712",
      )
      .setFooter("Page 1/5")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Prithiva Topaz Sliver")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Element:** <:Geo:798483630740865044> Geo",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Geo Hypostasis\nWolf of the North Challenge Reward\nPurchased from the Souvenir Shop",
        "",
        "Prithiva Topaz Sliver is used for the following character ascensions:\n\n<:Albedo:798579345916559370> Albedo\n<:Ningguang:798571977120022578> Ningguang\n<:Noelle:798578667508072458> Noelle\n<:Zhongli:798577390577254441> Zhongli",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Prithiva_Topaz_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106074650",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Prithiva_Topaz_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106074650",
      )
      .setFooter("Page 2/5")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Prithiva Topaz Fragment")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Element:** <:Geo:798483630740865044> Geo",
        "",
        "**Description:**\nThe currencies that flow through this land are my flesh and blood.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Lv.40+ Geo Hypostasis\nLv.40+ Wolf of the North Challenge Reward\n**Crafting:** 3x Prithiva Topaz Sliver, 300 Mora",
        "",
        "Prithiva Topaz Fragment is used for the following character ascensions:\n\n<:Albedo:798579345916559370> Albedo\n<:Ningguang:798571977120022578> Ningguang\n<:Noelle:798578667508072458> Noelle\n<:Zhongli:798577390577254441> Zhongli",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Item_Prithiva_Topaz_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074703",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Item_Prithiva_Topaz_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074703",
      )
      .setFooter("Page 3/5")
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Prithiva Topaz Chunk")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Element:** <:Geo:798483630740865044> Geo",
        "",
        "**Description:**\nThe currencies on this land are blood.\nI am the guarantor of the people's hard work, wisdom, and future.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Lv.60+ Geo Hypostasis\nLv. 60+ Wolf of the North Challenge Reward\n**Crafting:** 3x Prithiva Topaz Fragment, 900 Mora",
        "",
        "Prithiva Topaz Chunk is used for the following character ascensions:\n\n<:Albedo:798579345916559370> Albedo\n<:Ningguang:798571977120022578> Ningguang\n<:Noelle:798578667508072458> Noelle\n<:Zhongli:798577390577254441> Zhongli",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Item_Prithiva_Topaz_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106074708",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Item_Prithiva_Topaz_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106074708",
      )
      .setFooter("Page 4/5")
      .setColor("RANDOM");

    const fifthEmbed = new Embed()
      .setTitle("Prithiva Topaz Gemstone")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐⭐",
        "",
        "**Element:** <:Geo:798483630740865044> Geo",
        "",
        "**Description:**\nThe currencies that flow through this land are my flesh and blood.\nFor thus did I become the guarantor of the people's hard work, wisdom, and future.\nThis is the trust I have placed in them. Betray it, and you taint my blood.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Lv.75+ Geo Hypostasis\nLv. 75+ Wolf of the North Challenge Reward\n**Crafting:** 3x Prithiva Topaz Chunk, 2.700 Mora",
        "",
        "Prithiva Topaz Gemstone is used for the following character ascensions:\n\n<:Albedo:798579345916559370> Albedo\n<:Ningguang:798571977120022578> Ningguang\n<:Noelle:798578667508072458> Noelle\n<:Zhongli:798577390577254441> Zhongli",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Item_Prithiva_Topaz_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074712",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Item_Prithiva_Topaz_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074712",
      )
      .setFooter("Page 5/5")
      .setColor("RANDOM");

    createPagination(message, [
      firstEmbed,
      secondEmbed,
      thirdEmbed,
      fourthEmbed,
      fifthEmbed,
    ]);
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
