import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "ballad",
  aliases: ["teachingsofballad", "guidetoballad", "philosophiesofballad"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Teachings of Ballad")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Teachings of Ballad is used to level talents for the following characters:",
        "<:Albedo:798579345916559370> Albedo\n<:Fischl:798579031381114890> Fischl\n<:Kaeya:798578983775240242> Kaeya\n<:Lisa:798578725716361267> Lisa\n<:Venti:798578059891834890> Venti",
        "",
        "**Source:**",
        "Forsaken Rift *(Wednesday/Saturday/Sunday)*",
        "",
        "**Description:**",
        "Poetry is the soul of the Land of the Wind.\nPoetry is the manifestations of beautiful feelings. On a beautiful day, the breezes carry with them poetry that touches the heart of people like the wind caressing the leaves.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Teachings_of_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065412",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Teachings_of_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065412",
      )
      .setFooter("Page 1/3")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Guide to Ballad")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Guide to Ballad is used to level talents for the following characters:",
        "<:Albedo:798579345916559370> Albedo\n<:Fischl:798579031381114890> Fischl\n<:Kaeya:798578983775240242> Kaeya\n<:Lisa:798578725716361267> Lisa\n<:Venti:798578059891834890> Venti\n<:Traveler:798976293613600829> Traveler",
        "",
        "**Source:**",
        "Forsaken Rift *(Wednesday/Saturday/Sunday)*\n**Crafting:** 3x Teachings of Ballad, 175 Mora",
        "",
        "**Description:**",
        "Poetry is the soul of the Land of the Wind.\nPoetry is the manifestations of the will to encourage. In the dark days, the gales in the streets and alleyways whisper words of fury, like the battle drums, like the low rumbling before the storm.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Guide_to_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065423",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Guide_to_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065423",
      )
      .setFooter("Page 2/3")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Philosophies of Ballad")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Philosophies of Ballad is used to level talents for the following characters:",
        "<:Albedo:798579345916559370> Albedo\n<:Fischl:798579031381114890> Fischl\n<:Kaeya:798578983775240242> Kaeya\n<:Lisa:798578725716361267> Lisa\n<:Venti:798578059891834890> Venti\n<:Traveler:798976293613600829> Traveler",
        "",
        "**Source:**",
        "Forsaken Rift *(Wednesday/Saturday/Sunday)*\n**Crafting:** 3x Guide to Ballad, 550 Mora",
        "",
        "**Description:**",
        "Poetry is the soul of the Land of the Wind.\nPoetry is the manifestations of the desire to spread the word. Though nothing is eternal, though nothing will be the same, the wind's poetry will still spread beyond the skies, the land, the seas, to every corner of the world.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Philosophies_of_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065347",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Philosophies_of_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065347",
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
