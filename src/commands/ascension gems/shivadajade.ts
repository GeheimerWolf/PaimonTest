import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "shivadajade",
  aliases: ["sv", "shivada"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Shivada Jade")
      .setDescription([
        "**Shivada Jade** are gemstones of varying quality used in the ascension of characters.\n\n**Shivada Jade** is associated with the Cryo element.\n\nCan be obtained from the Cryo Regisvine, Wolf of the North Challenge, Souvenir Shop and Alchemy.\n\n**Element:** <:Cryo:798483525052530719> Cryo",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Item_Shivada_Jade_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074802",
      )
      .setFooter("Page 1/5")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Shivada Jade Sliver")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Element:** <:Cryo:798483525052530719> Cryo",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Cryo Regisvine\nPurchased from the Souvenir Shop\nWolf of the North Challenge Reward",
        "",
        "Shivada Jade Sliver is used for the following character ascensions:\n\n<:Chongyun:798579223241162792> Chongyun\n<:Diona:798582510480785409> Diona\n<:Ganyu:798579013084774504> Ganyu\n<:Kaeya:798578983775240242> Kaeya\n<:Qiqi:798578651145830401> Qiqi",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/8/87/Item_Shivada_Jade_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106074748",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/8/87/Item_Shivada_Jade_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106074748",
      )
      .setFooter("Page 2/5")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Shivada Jade Fragment")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Element:** <:Cryo:798483525052530719> Cryo",
        "",
        "**Description:**\nSorry…",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Lv. 40+ Cryo Regisvine\nLv. Lv. 40+ Wolf of the North Challenge Reward\nTalk to Ivanovich (one time)\n**Crafting:** 3x Shivada Jade Sliver, 300 Mora",
        "",
        "Shivada Jade Sliver is used for the following character ascensions:\n\n<:Chongyun:798579223241162792> Chongyun\n<:Diona:798582510480785409> Diona\n<:Ganyu:798579013084774504> Ganyu\n<:Kaeya:798578983775240242> Kaeya\n<:Qiqi:798578651145830401> Qiqi",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Shivada_Jade_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074754",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Shivada_Jade_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074754",
      )
      .setFooter("Page 3/5")
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Shivada Jade Chunk")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Element:** <:Cryo:798483525052530719> Cryo",
        "",
        "**Description:**\nSorry...\n...to also have you shoulder the grievances of the world.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Lv. 60+ Cryo Regisvine\nLv. 60+ Wolf of the North Challenge Reward\n**Crafting:** 3x Shivada Jade Fragment, 900 Mora",
        "",
        "Shivada Jade Sliver is used for the following character ascensions:\n\n<:Chongyun:798579223241162792> Chongyun\n<:Diona:798582510480785409> Diona\n<:Ganyu:798579013084774504> Ganyu\n<:Kaeya:798578983775240242> Kaeya\n<:Qiqi:798578651145830401> Qiqi",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/41/Item_Shivada_Jade_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106074758",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/41/Item_Shivada_Jade_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106074758",
      )
      .setFooter("Page 4/5")
      .setColor("RANDOM");

    const fifthEmbed = new Embed()
      .setTitle("Shivada Jade Gemstone")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐⭐",
        "",
        "**Element:** <:Cryo:798483525052530719> Cryo",
        "",
        "**Description:**\nSorry... to also have you shoulder the grievances of the world.\nSince you could endure my bitter cold, you must have the desire to burn?\nThen, burn away the old world for me.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\nDropped by Lv. 75+ Cryo Regisvine\nLv. 75+ Wolf of the North Challenge Reward\n**Crafting:** 3x Shivada Jade Chunk, 2.700 Mora",
        "",
        "Shivada Jade Sliver is used for the following character ascensions:\n\n<:Chongyun:798579223241162792> Chongyun\n<:Diona:798582510480785409> Diona\n<:Ganyu:798579013084774504> Ganyu\n<:Kaeya:798578983775240242> Kaeya\n<:Qiqi:798578651145830401> Qiqi",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Item_Shivada_Jade_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074802",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Item_Shivada_Jade_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074802",
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
