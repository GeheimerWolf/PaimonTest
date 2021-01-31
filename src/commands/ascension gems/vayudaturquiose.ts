import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "vayudaturquoise",
  aliases: ["vt", "vayuda"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Vayuda Turquoise")
      .setDescription([
        "**Vayuda Turquoise** are gemstones of varying quality used in the ascension of characters.\n\n**Vayuda Turquoise** is associated with the Anemo element.\n\nCan be obtained from the Anemo Hypostasis, Souvenir Shop and Alchemy.\n\n**Element:** <:Anemo:798483595781341194> Anemo",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Vayuda_Turquoise_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074919",
      )
      .setFooter("Page 1/5")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Brilliant Diamond Sliver")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Element:** <:Anemo:798483595781341194> Anemo",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Anemo Hypostasis\nPurchased from the Souvenir Shop",
        "",
        "Vayuda Turquoise Sliver is used for the following character ascensions:\n\n<:Jean:798578932031029308> Jean\n<:Sucrose:798578072756158475> Sucrose\n<:Venti:798578059891834890> Venti",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Item_Vayuda_Turquoise_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106074904",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Item_Vayuda_Turquoise_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106074904",
      )
      .setFooter("Page 2/5")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Brilliant Diamond Fragment")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Element:** <:Anemo:798483595781341194> Anemo",
        "",
        "**Description:**\nStill, the winds change direction.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Lv.40+ Anemo Hypostasis\n**Crafting:** 3x Vayuda Turquoise Sliver, 300 Mora",
        "",
        "Vayuda Turquoise Sliver is used for the following character ascensions:\n\n<:Jean:798578932031029308> Jean\n<:Sucrose:798578072756158475> Sucrose\n<:Venti:798578059891834890> Venti",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Vayuda_Turquoise_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074908",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Vayuda_Turquoise_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074908",
      )
      .setFooter("Page 3/5")
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Vayuda Turquoise Chunk")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Element:** <:Anemo:798483595781341194> Anemo",
        "",
        "**Description:**\nStill, the winds change direction.\nSomeday, they will blow towards a brighter future…\nTake my blessings and live leisurely from this day onward.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Lv.60+ Anemo Hypostasis\n**Crafting:** 3x Vayuda Turquoise Fragment, 900 Mora",
        "",
        "Vayuda Turquoise Sliver is used for the following character ascensions:\n\n<:Jean:798578932031029308> Jean\n<:Sucrose:798578072756158475> Sucrose\n<:Venti:798578059891834890> Venti",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Vayuda_Turquoise_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106074913",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Vayuda_Turquoise_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106074913",
      )
      .setFooter("Page 4/5")
      .setColor("RANDOM");

    const fifthEmbed = new Embed()
      .setTitle("Vayuda Turquoise Gemstone")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐⭐",
        "",
        "**Element:** <:Anemo:798483595781341194> Anemo",
        "",
        "**Description:**\nStill, the winds change direction.\nSomeday, they will blow towards a brighter future…\nTake my blessings and live leisurely from this day onward.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Lv. 75+ Anemo Hypostasis\n**Crafting:** 3x Vayuda Turquoise Chunk, 2.700 Mora",
        "",
        "Vayuda Turquoise Sliver is used for the following character ascensions:\n\n<:Jean:798578932031029308> Jean\n<:Sucrose:798578072756158475> Sucrose\n<:Venti:798578059891834890> Venti",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Vayuda_Turquoise_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074919",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Vayuda_Turquoise_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074919",
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
