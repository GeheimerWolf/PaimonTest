import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "mistveiled",
  aliases: ["mistveiledleadelixir", "mistveiledmercuryelixir", "mistveiledgoldelixir", "mistveiledprimoelixir"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Mist Veiled")
      .setDescription([
        "**Item type:** Weapon Ascension Material",
        "",
        "**Source:**",
        "1.) Hidden Palace of Lianshan Formula *(Tuesday/Friday/Sunday)*\n2.) Purchased from the Souvenir Shop in Liyue",
        "",
        "**Aerosiderite** is used for the following weapon ascensions:"
      ])
      .addField("⭐⭐⭐", "Debate Club\nFillet Blade\nHalberd\nMessenger\nTwin Nephrite", true)
      .addField("⭐⭐⭐⭐", "Blackcliff Pole\nBlackcliff Slasher\nDragon's Bane\nEye of Perception\nPrototype Amber\nPrototype Crescent\nPrototype Rancour\nRainslasher\nRoyal Spear", true)
      .addField("⭐⭐⭐⭐⭐", "The Unforged", true)
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Mist_Veiled_Mercury_Elixir.png/revision/latest/scale-to-width-down/256?cb=20210109215853")
      .setFooter("Page 1/5")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
    .setTitle("Mist Veiled Lead Elixir")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Weapon Ascension Material",
        "",
        "**Source:**",
        "1.) Hidden Palace of Lianshan Formula *(Tuesday/Friday/Sunday)*\n2.) Purchased from the Souvenir Shop in Liyue",
        "",
        "**Description:**",
        "Jueyun Karst is the realm of the mighty and illuminated adepti. But other than the ability to control the elements of the world, Jueyun Karst is also home to three other untold secrets: Danding (Alchemy), Fulu (Sigils), and Waijing (Sub-Space Creation)."
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Item_Mist_Veiled_Lead_Elixir.png/revision/latest/scale-to-width-down/256?cb=20210109215901")
      .setFooter("Page 2/5")
      .setTimestamp()
      .setColor("RANDOM");
      

    const thirdEmbed = new Embed()
    .setTitle("Mist Veiled Mercury Elixir")
    .setDescription([
      "**Rarity:** ⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "1.) Hidden Palace of Lianshan Formula *(Tuesday/Friday/Sunday)*\n2.) Crafting: 3x Mist Veiled Lead Elixir, 125 Mora",
      "",
      "**Description:**",
      "With Fulu (Sigils), the adepti can store their power in the form of symbols, and with Waijing (Sub-Space Creation) they can fashion a cosmic paradise with the power of their minds. The manufacture of elixirs, however, has always been shrouded in mystery, for certain death follows for any who swallow them."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Mist_Veiled_Mercury_Elixir.png/revision/latest/scale-to-width-down/256?cb=20210109215853")
    .setFooter("Page 3/5")
    .setTimestamp()
    .setColor("RANDOM");

    const fourthEmbed = new Embed()
    .setTitle("Mist Veiled Gold Elixir")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "1.) Hidden Palace of Lianshan Formula *(Tuesday/Friday/Sunday)*\n2.) Crafting: 3x Mist Veiled Mercury Elixir, 350 Mora",
      "",
      "**Description:**",
      "Elixirs are in fact pills made from metal alloys. They were created by the adepti, and are able to grant weapons transcendent powers.\nHowever, they are rarely seen in the world due to the hubris of the practitioners of martial arts, who prized the ways of combat over the paths of the adepti."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Item_Mist_Veiled_Gold_Elixir.png/revision/latest/scale-to-width-down/256?cb=20210109215906")
    .setFooter("Page 4/5")
    .setTimestamp()
    .setColor("RANDOM");

    const fifthEmbed = new Embed()
    .setTitle("Mist Veiled Primo Elixir")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "1.) Hidden Palace of Lianshan Formula *(Tuesday/Friday/Sunday)*\n2.) Crafting: 3x Mist Veiled Gold Elixir, 1.075 Mora",
      "",
      "**Description:**",
      "An elixir of the highest quality. It embodies a state of intertwining order and chaos, and is said to mirror how the world was when it was first created. Of course, a certain someone knows that this was not the case."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Item_Mist_Veiled_Primo_Elixir.png/revision/latest/scale-to-width-down/256?cb=20210109215849")
    .setFooter("Page 5/5")
    .setTimestamp()
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
