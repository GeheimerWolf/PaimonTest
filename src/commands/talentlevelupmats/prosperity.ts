import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "Prosperity",
  aliases: [
    "teachingsofprosperity",
    "guidetoprosperity",
    "philosophiesofprosperity",
  ],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Teachings of Prosperity")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Teachings of Prosperity is used to level talents for the following characters:",
        "<:Keqing:798578899956006914> Keqing\n<:Ningguang:798571977120022578> Ningguang\n<:Qiqi:798578651145830401> Qiqi<:Traveler:798976293613600829> Traveler",
        "",
        "**Source:**",
        "Taishan Mansion *(Monday/Thursday/Sunday)*",
        "",
        "**Description:**",
        "Prosperity is the pursuit of the land of the earth. Prosperity is the blessing of Liyue, is the great city built by the gods and the people of Liyue, is the source of the peace and safety of the land.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/9/9e/Item_Teachings_of_Prosperity.png/revision/latest/scale-to-width-down/256?cb=20210106072137",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/9/9e/Item_Teachings_of_Prosperity.png/revision/latest/scale-to-width-down/256?cb=20210106072137",
      )
      .setFooter("Page 1/3")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Guide to Prosperity")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Guide to Prosperity is used to level talents for the following characters:",
        "<:Keqing:798578899956006914> Keqing\n<:Ningguang:798571977120022578> Ningguang\n<:Qiqi:798578651145830401> Qiqi<:Traveler:798976293613600829> Traveler",
        "",
        "**Source:**",
        "Taishan Mansion *(Monday/Thursday/Sunday)*\n**Crafting:** 3x Teachings of Prosperity, 175 Mora",
        "",
        "**Description:**",
        "Prosperity is the pursuit of the Land of the Earth. Prosperity is the promise made by Liyue to its children: To repay the hard-working laborers with enough gold to brighten up this land.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Guide_to_Prosperity.png/revision/latest/scale-to-width-down/256?cb=20210106072143",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Guide_to_Prosperity.png/revision/latest/scale-to-width-down/256?cb=20210106072143",
      )
      .setFooter("Page 2/3")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Philosophies of Prosperity")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Philosophies of Prosperity is used to level talents for the following characters:",
        "<:Keqing:798578899956006914> Keqing\n<:Ningguang:798571977120022578> Ningguang\n<:Qiqi:798578651145830401> Qiqi<:Traveler:798976293613600829> Traveler",
        "",
        "**Source:**",
        "Taishan Mansion *(Monday/Thursday/Sunday)*\n**Crafting:** 3x Guide to Prosperity, 550 Mora",
        "",
        "**Description:**",
        "Properity is the pursuit of the Land of the Earth. Prosperity is Liyue's past, present, and future. This prosperity, unmatched and unobtainable by any of the other nations, is all for Liyue and its children to enjoy.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/bd/Item_Philosophies_of_Prosperity.png/revision/latest/scale-to-width-down/256?cb=20210106072155",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/bd/Item_Philosophies_of_Prosperity.png/revision/latest/scale-to-width-down/256?cb=20210106072155",
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
