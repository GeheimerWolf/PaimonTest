import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "boreal",
  aliases: ["borealwolf", "borealwolfs", "borealwolfsmilktooth", "borealwolfsbrokenfang", "borealwolfscrackedtooth", "borealwolfsnostalgia", "milktooth", "brokenfang", "crackedtooth", "nostalgia"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Boreal Wolf's")
      .setDescription([
        "**Item type:** Weapon Ascension Material",
        "",
        "**Source:**",
        "Cecilia Garden *(Tuesday/Friday/Sunday)*",
        "",
        "**Boreal Wolf's** is used for the following weapon ascensions:"
      ])
      .addField("⭐⭐⭐", "Bloodtainted Greatsword\nHarbinger of Dawn\nSharpshooter's Oath\nThrilling Tales of Dragon Slayers	", true)
      .addField("⭐⭐⭐⭐", "Alley Hunter\nDeathmatch\nDragonspine Spear\nSacrificial Bow\nSacrificial Greatsword\nSword of Descension\nThe Black Sword\nThe Flute\nThe Widsith\nWine and Song", true)
      .addField("⭐⭐⭐⭐⭐", "Skyward Atlas\nSkyward Blade\nSkyward Harp\nSkyward Pride", true)
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Boreal_Wolf%27s_Broken_Fang.png/revision/latest/scale-to-width-down/256?cb=20210109220035")
      .setFooter("Page 1/5")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
    .setTitle("Boreal Wolf's Milk Tooth")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Weapon Ascension Material",
        "",
        "**Source:**",
        "Cecilia Garden *(Tuesday/Friday/Sunday)*",
        "",
        "**Description:**",
        "Andrius' wolf pack is its blessed honor guard, and even the milk teeth of a wolf's cub possess great potential.\nIn the past, the gods had the responsibility to love all people, which made Andrius quite the oddball for only adopting abandoned babies and accepting wanderers."
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Boreal_Wolf%27s_Milk_Tooth.png/revision/latest/scale-to-width-down/256?cb=20210109220042")
      .setFooter("Page 2/5")
      .setTimestamp()
      .setColor("RANDOM");
      

    const thirdEmbed = new Embed()
    .setTitle("Boreal Wolf's Cracked Tooth")
    .setDescription([
      "**Rarity:** ⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "1.) Cecilia Garden *(Tuesday/Friday/Sunday)*\n2.) Crafting: 3x Boreal Wolf's Milk Tooth, 125 Mora",
      "",
      "**Description:**",
      "The life of a wolf is not without violence; broken bones or cracked teeth are nothing special.\nAndrius found humans to be a disappointment, but believed babies to be innocent. If both the wolf pack and the adopted children chose each other, then they become a Lupical, a fated family."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Boreal_Wolf%27s_Cracked_Tooth.png/revision/latest/scale-to-width-down/256?cb=20210109220038")
    .setFooter("Page 4/5")
    .setTimestamp()
    .setColor("RANDOM");

    const fourthEmbed = new Embed()
    .setTitle("Boreal Wolf's Broken Fang")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "1.) Cecilia Garden *(Tuesday/Friday/Sunday)*\n2.) Crafting: 3x Boreal Wolf's Cracked Tooth, 350 Mora",
      "",
      "**Description:**",
      "The wolf pack also understands that humans are not solitary creatures. The honorary broken tooth is a parting gift said to bring protection and luck.\nIn the legends of a far-off world, a female wolf once adopted two great humans. Their home was known as the Cave of Wolves, or Lupercal - that word meaning the same thing as Lupical does in this world."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Boreal_Wolf%27s_Broken_Fang.png/revision/latest/scale-to-width-down/256?cb=20210109220033")
    .setFooter("Page 3/5")
    .setTimestamp()
    .setColor("RANDOM");

    const fifthEmbed = new Embed()
    .setTitle("Boreal Wolf's Nostalgia")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "1.) Cecilia Garden *(Tuesday/Friday/Sunday)*\n2.) Crafting: 3x Boreal Wolf's Broken Fang, 1.075 Mora",
      "",
      "**Description:**",
      "The Wolf King, believing itself to despise humans, thought itself unable to envision a happy life for humanity, making it unworthy of becoming the Lord of the Winds of the world. Therefore, it chose to disappear. Yet, in truth, it gazed on the ones the world abandoned ever so gently."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Boreal_Wolf%27s_Nostalgia.png/revision/latest/scale-to-width-down/256?cb=20210109220049")
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
