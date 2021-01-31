import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "aerosiderite",
  aliases: ["pieceofaerosiderite", "grainofaerosiderite", "bitofaerosiderite", "chunkofaerosiderite"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Aerosiderite")
      .setDescription([
        "**Item type:** Weapon Ascension Material",
        "",
        "**Source:**",
        "1.) Hidden Palace of Lianshan Formula *(Wednesday/Saturday/Sunday)*\n2.) Purchased from the Souvenir Shop in Liyue",
        "",
        "**Aerosiderite** is used for the following weapon ascensions:"
      ])
      .addField("⭐⭐⭐", "Black Tassel\nSkyrider Greatsword\nSkyrider Sword", true)
      .addField("⭐⭐⭐⭐", "Compound Bow\nIron Sting\nMappa Mare\nPrototype Archaic\nPrototype Starglitter\nSerpent Spine", true)
      .addField("⭐⭐⭐⭐⭐", "Memory of Dust\nVortex Vanquisher", true)
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Piece_of_Aerosiderite.png/revision/latest/scale-to-width-down/256?cb=20210109215813")
      .setFooter("Page 1/5")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
    .setTitle("Grain of Aerosiderite")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Weapon Ascension Material",
        "",
        "**Source:**",
        "1.) Hidden Palace of Lianshan Formula *(Wednesday/Saturday/Sunday)*\n2.) Purchased from the Souvenir Shop in Liyue",
        "",
        "**Description:**",
        "A black meteor once fell beyond Liyue's Sea of Clouds, said to have fallen to vanquish a monster. However, it was stained by powerful tainted blood, so this item no longer possesses the pure power of Rex Lapis."
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/47/Item_Grain_of_Aerosiderite.png/revision/latest/scale-to-width-down/256?cb=20210109220930")
      .setFooter("Page 2/5")
      .setTimestamp()
      .setColor("RANDOM");
      

    const thirdEmbed = new Embed()
    .setTitle("Piece of Aerosiderite")
    .setDescription([
      "**Rarity:** ⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "1.) Hidden Palace of Lianshan Formula *(Wednesday/Saturday/Sunday)*\n2.) Crafting: 3x Grain of Aerosiderite, 125 Mora",
      "",
      "**Description:**",
      "The coastal nations of Teyvat refer to the region beyond the protection of The Seven as the Dark Sea. It is said many defeated gods refused to live under the new order of The Seven, so they fled to remote islands and became evil gods. However, their powers came from the same source as Rex Lapis, separate from this all-devouring darkness."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Piece_of_Aerosiderite.png/revision/latest/scale-to-width-down/256?cb=20210109215813")
    .setFooter("Page 3/5")
    .setTimestamp()
    .setColor("RANDOM");

    const fourthEmbed = new Embed()
    .setTitle("Bit of Aerosiderite")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "1.) Hidden Palace of Lianshan Formula *(Wednesday/Saturday/Sunday)*\n2.) Crafting: 3x Piece of Aerosiderite, 350 Mora",
      "",
      "**Description:**",
      "The coastal nations of Teyvat refer to the region beyond the protection of The Seven as the Dark Sea. It is said many defeated gods refused to live under the new order of The Seven, so they fled to remote islands and became evil gods. However, their powers came from the same source as Rex Lapis, separate from this all-devouring darkness."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/1/17/Item_Bit_of_Aerosiderite.png/revision/latest/scale-to-width-down/256?cb=20210109215827")
    .setFooter("Page 4/5")
    .setTimestamp()
    .setColor("RANDOM");

    const fifthEmbed = new Embed()
    .setTitle("Chunk of Aerosiderite")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "1.) Hidden Palace of Lianshan Formula *(Wednesday/Saturday/Sunday)*\n2.) Crafting: 3x Bit of Aerosiderite, 1.075 Mora",
      "",
      "**Description:**",
      "When Khaenri'ah was destroyed, a great sinner created endless monsters with alien, dark blood flowing through their veins. They rampaged across the land, destroying all in their paths. Their lives were mutations, caused by powers beyond this world. The black serpentine dragon Durin that attacked Mondstadt was such a mutation."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/48/Item_Chunk_of_Aerosiderite.png/revision/latest/scale-to-width-down/256?cb=20210109215819")
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
