import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "resistance",
  aliases: [
    "teachingsofresistance",
    "guidetoresistance",
    "philosophiesofresistance",
  ],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Teachings of Resistance")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Teachings of Resistance is used to level talents for the following characters:",
        "<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:Jean:798578932031029308> Jean\n<:Mona:798582495674105876> Mona\n<:Noelle:798578667508072458> Noelle\n<:Razor:798578623900024862> Razor",
        "",
        "**Source:**",
        "Forsaken Rift *(Tuesday/Friday/Sunday)*",
        "",
        "**Description:**",
        "Resistance is the backbone of the Land of the Wind.\nThe history of Mondstadt is one of resistances. People rose up to prevent past conflicts from ever being forgotten, like sprouts breaking through the soil, like the eternal wind eroding through stone walls.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Teachings_of_Resistance.png/revision/latest/scale-to-width-down/256?cb=20210106072033",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Teachings_of_Resistance.png/revision/latest/scale-to-width-down/256?cb=20210106072033",
      )
      .setFooter("Page 1/3")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Guide to Resistance")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Guide to Resistance is used to level talents for the following characters:",
        "<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:Jean:798578932031029308> Jean\n<:Mona:798582495674105876> Mona\n<:Noelle:798578667508072458> Noelle\n<:Razor:798578623900024862> Razor\<:Traveler:798976293613600829> Traveler",
        "",
        "**Source:**",
        "Forsaken Rift *(Tuesday/Friday/Sunday)*\n**Crafting:** 3x Teachings of Resistance, 175 Mora",
        "",
        "**Description:**",
        "Resistance is the backbone of the city of Wind.\nThe history of Mondstadt is one of resistances. People rose up to grant the citizens of Mondstadt the freedom they now enjoy, like the Anemo Archon blowing away the snow, or like Vennessa rising up to fight.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Guide_to_Resistance.png/revision/latest/scale-to-width-down/256?cb=20210106072046",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Guide_to_Resistance.png/revision/latest/scale-to-width-down/256?cb=20210106072046",
      )
      .setFooter("Page 2/3")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Philosophies of Resistance")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Philosophies of Resistance is used to level talents for the following characters:",
        "<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:Jean:798578932031029308> Jean\n<:Mona:798582495674105876> Mona\n<:Noelle:798578667508072458> Noelle\n<:Razor:798578623900024862> Razor\n<:Traveler:798976293613600829> Travelers",
        "",
        "**Source:**",
        "Forsaken Rift *(Tuesday/Friday/Sunday)*\n**Crafting:** 3x Guide to Resistance, 550 Mora",
        "",
        "**Description:**",
        "Resistance is the backbone of the Land of the Wind.\nThe history of Mondstadt is one of resistances. People rose up to allow the future Mondstadt's poetry to freely be that of the wind and be spread across the land.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Philosophies_of_Resistance.png/revision/latest/scale-to-width-down/256?cb=20210106072058",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Philosophies_of_Resistance.png/revision/latest/scale-to-width-down/256?cb=20210106072058",
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
