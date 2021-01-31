import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import {  createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "agnidusagate",
  aliases: ["aa", "agnidus"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Agnidus Agate")
      .setDescription([
        "**Agnidus Agate** are gemstones of varying quality used in the ascension of characters.\n\n**Agnidus Agate** is associated with the Pyro element.\n\nCan be obtained from the Pyro Regisvine, Wolf of the North Challenge, Souvenir Shop and Alchemy.\n\n**Element:** <:Pyro:798483485832249354> Pyro",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Agnidus_Agate_Gemstone.png",
      )
      .setFooter("Page 1/5")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Agnidus Agate Sliver")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Element:** <:Pyro:798483485832249354> Pyro",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Pyro Regisvine\nWolf of the North Challenge\nPurchased from the Souvenir Shop",
        "",
        "Agnidus Agate Sliver is used for the following character ascensions:\n\n<:Amber:798579318262988810> Amber\n<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:Klee:798578917464080404> Klee\n<:Xiangling:798578032935436329> Xianling\n<:Xinyan:798577406427529246> Xinyan",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Item_Agnidus_Agate_Sliver.png",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Item_Agnidus_Agate_Sliver.png",
      )
      .setFooter("Page 2/5")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Agnidus Agate Fragment")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Element:** <:Pyro:798483485832249354> Pyro",
        "",
        "**Description:**\nA pilgrimage for a wish; a battle to earn a name...",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Lv.40+ Pyro Regisvine\nLv.40+ Wolf of the North Challenge\n**Crafting:** 3x Agnidus Agate Sliver, 300 Mora",
        "",
        "Agnidus Agate Fragment is used for the following character ascensions:\n\n<:Amber:798579318262988810> Amber\n<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:Klee:798578917464080404> Klee\n<:Xiangling:798578032935436329> Xianling\n<:Xinyan:798577406427529246> Xinyan",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Agnidus_Agate_Fragment.png",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Agnidus_Agate_Fragment.png",
      )
      .setFooter("Page 3/5")
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Agnidus Agate Chunk")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Element:** <:Pyro:798483485832249354> Pyro",
        "",
        "**Description:**\nA pilgrimage for a wish; a battle to earn a name… Burnt to cinders for a dream.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Lv.60+ Pyro Regisvine\nLv.60+ Wolf of the North Challenge\n**Crafting:** 3x Agnidus Agate Fragment, 900 Mora",
        "",
        "Agnidus Agate Chunk is used for the following character ascensions:\n\n<:Amber:798579318262988810> Amber\n<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:Klee:798578917464080404> Klee\n<:Xiangling:798578032935436329> Xianling\n<:Xinyan:798577406427529246> Xinyan",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Item_Agnidus_Agate_Chunk.png",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Item_Agnidus_Agate_Chunk.png",
      )
      .setFooter("Page 4/5")
      .setColor("RANDOM");

    const fifthEmbed = new Embed()
      .setTitle("Agnidus Agate Gemstone")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐⭐",
        "",
        "**Element:** <:Pyro:798483485832249354> Pyro",
        "",
        "**Description:**\nA pilgrimage for a wish; a battle to earn a name...\nBurnt to cinders for a dream.\nIf the intention yet remains, achieved ██'s truth he has.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Lv.75+ Pyro Regisvine\nLv.75+ Wolf of the North Challenge\n**Crafting:** 3x Agnidus Agate Chunk, 2.700 Mora",
        "",
        "Agnidus Agate Gemstone is used for the following character ascensions:\n\n<:Amber:798579318262988810> Amber\n<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:Klee:798578917464080404> Klee\n<:Xiangling:798578032935436329> Xianling\n<:Xinyan:798577406427529246> Xinyan",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Agnidus_Agate_Gemstone.png",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Agnidus_Agate_Gemstone.png",
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
