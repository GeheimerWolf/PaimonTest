import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "enhancementore",
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Enhancement Ore")
      .setDescription([
        "**Rarity:** ⭐",
        "",
        "**Item type:** Weapon Enhancement Material",
        "",
        "**Source:**",
        "1.) Forging: 2x Iron Chunk, 5 Mora\n2.) Random Event Reward",
        "",
        "**Description:**",
        "Weapon EXP material. Gives 400 EXP. A refined ingot with endless possibilities that can be used to enhance weapons."
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/4f/Item_Enhancement_Ore.png/revision/latest/scale-to-width-down/256?cb=20210106074027")
      .setFooter("Page 1/3")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
    .setTitle("Fine Enhancement Ore")
    .setDescription([
      "**Rarity:** ⭐⭐",
      "",
      "**Item type:** Weapon Enhancement Material",
      "",
      "**Source:**",
      "1.) Forging: 3x White Iron Chunk, 10 Mora\n2.) Random Event Reward",
      "",
      "**Description:**",
      "Weapon EXP material. Gives 2,000 EXP. For reasons unknown, this special and refined ore can be absorbed by weapons to greatly increase their strengths."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/23/Item_Fine_Enhancement_Ore.png/revision/latest/scale-to-width-down/256?cb=20210106073916")
    .setFooter("Page 2/3")
    .setColor("RANDOM")
      

    const thirdEmbed = new Embed()
    .setTitle("Mystic Enhancement Ore")
    .setDescription([
      "**Rarity:** ⭐⭐⭐",
      "",
      "**Item type:** Weapon Enhancement Material",
      "",
      "**Source:**",
      "1.) Forging: 4x Crystal Chunk, 50 Mora\n2.) Forging: 3x Magical Crystal Chunk, 10x Original Resin, 100 Mora\n3.) Random Event Reward",
      "",
      "**Description:**",
      "Weapon EXP material. Gives 10,000 EXP. Legend has it that this refined ingot contains the memories of battles that had taken place on the land. The weapons that benefit from these memories naturally become sentient."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/5/55/Item_Mystic_Enhancement_Ore.png/revision/latest/scale-to-width-down/256?cb=20210106073921")
    .setFooter("Page 3/3")
    .setColor("RANDOM");

    createPagination(message, [
      firstEmbed,
      secondEmbed,
      thirdEmbed,
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
