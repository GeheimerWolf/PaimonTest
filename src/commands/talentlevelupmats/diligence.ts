import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "diligence",
  aliases: [
    "teachingsofdiligence",
    "guidetodiligence",
    "philosophiesofdiligence",
  ],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Teachings of Diligence")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Teachings of Diligence is used to level talents for the following characters:",
        "<:Chongyun:798579223241162792> Chongyun\n<:Ganyu:798579013084774504> Ganyu\n<:Xiangling:798578032935436329> Xiangling",
        "",
        "**Source:**",
        "Taishan Mansion *(Tuesday/Friday/Sunday)*",
        "",
        "**Description:**",
        "Industriousness is the foundation of the Land of the Earth.\nDiligence is to conquer mountains and seas, pursue prosperity, golden bravery, and power with honest, hard work.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a7/Item_Teachings_of_Diligence.png/revision/latest/scale-to-width-down/256?cb=20210106072237",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a7/Item_Teachings_of_Diligence.png/revision/latest/scale-to-width-down/256?cb=20210106072237",
      )
      .setFooter("Page 1/3")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Guide to Diligence")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Guide to Diligence is used to level talents for the following characters:",
        "<:Chongyun:798579223241162792> Chongyun\n<:Ganyu:798579013084774504> Ganyu\n<:Xiangling:798578032935436329> Xiangling\n<:Traveler:798976293613600829> Traveler",
        "",
        "**Source:**",
        "Taishan Mansion *(Tuesday/Friday/Sunday)*\n**Crafting:** 3x Teachings of Diligence, 175 Mora",
        "",
        "**Description:**",
        "Industriousness is the foundation of the Land of the Earth.\nIndustriousness is the catalyst the flows in the blood of the people of Liyue, able to turn rocks into gold.\nIt is what makes its great commercial port great.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Item_Guide_to_Diligence.png/revision/latest/scale-to-width-down/256?cb=20210106072243",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Item_Guide_to_Diligence.png/revision/latest/scale-to-width-down/256?cb=20210106072243",
      )
      .setFooter("Page 2/3")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Philosophies of Diligence")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Philosophies of Diligence is used to level talents for the following characters:",
        "<:Chongyun:798579223241162792> Chongyun\n<:Ganyu:798579013084774504> Ganyu\n<:Xiangling:798578032935436329> Xiangling\n<:Traveler:798976293613600829> Traveler",
        "",
        "**Source:**",
        "Taishan Mansion *(Tuesday/Friday/Sunday)*\n**Crafting:** 3x Guide to Diligence, 550 Mora",
        "",
        "**Description:**",
        "Industriousness is the foundation of the land of the earth.\nIndustriousness is believing in one's own ability to earn a place in the land of the gods through sweat, wisdom, and power.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Item_Philosophies_of_Diligence.png/revision/latest/scale-to-width-down/256?cb=20210106072255",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Item_Philosophies_of_Diligence.png/revision/latest/scale-to-width-down/256?cb=20210106072255",
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
