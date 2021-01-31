import { botCache } from "../../cache.ts";
import { Message } from "../../deps.ts";
import { characters } from "../constants/character.ts";
import { needReaction } from "../utils/collectors.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "character",
  aliases: ["char"],
  arguments: [
    { name: "character", type: "string", required: false },
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {
    if (!args.character) {
      return message.reply(
        [
          "Available Characters:",
          "",
          [...characters.values()]
            .map((c) =>
              c.name.split(" ").join("").replaceAll("(", "").replaceAll(")", "")
                .toLowerCase()
            )
            .sort()
            .join(" "),
        ].join("\n"),
      );
    }

    const character = characters.get(
      args.character.split(" - ").join("").replaceAll("(", "").replaceAll(
        ")",
        "",
      ),
    );
    if (!character) {
      return message.reply(
        [
          "Paimon can't find that Person... Try on of these:",
          "",
          [...characters.values()]
            .map((c) =>
              c.name.split(" ").join("").replaceAll("(", "").replaceAll(")", "")
                .toLowerCase()
            )
            .sort()
            .join(" "),
        ].join("\n"),
      );
    }

    const first = new Embed()
      .setTitle(character.name)
      .setDescription([
        character.rarity,
        `**Element:** ${character.element}`,
        `**Weapon:** ${character.weapon}`,
        `**Nation:** ${character.nation}`,
        `**Affiliation:** ${character.affiliation}`,
        `**Special Dish:** ${character.specialDish}`,
        `**Constellation:** ${character.constellation}`,
        `**Birthday:** ${character.birthday}`,
        "",
        character.description,
        "",
        "ℹ️ - Main info",
        "⚔️ - Skill Talents",
        "🪄 - Passive Talents",
        "🌟 - Constellations",
        "🔼 - Ascension Costs",
      ])
      .setThumbnail(character.thumbnail)
      .setImage(character.image);

    const second = new Embed()
      .setTitle(character.name)
      .setDescription([
        "**Skill Talents**",
        "",
        "ℹ️ - Main info",
        "⚔️ - Skill Talents",
        "🪄 - Passive Talents",
        "🌟 - Constellations",
        "🔼 - Ascension Costs",
      ])
      .setThumbnail(character.thumbnail);
    for (const talent of character.activeTalents) {
      second.addField(talent.name, talent.description);
    }

    const third = new Embed()
      .setTitle(character.name)
      .setDescription([
        "**Passive Talents**",
        "",
        "ℹ️ - Main info",
        "⚔️ - Skill Talents",
        "🪄 - Passive Talents",
        "🌟 - Constellations",
        "🔼 - Ascension Costs",
      ])
      .setThumbnail(character.thumbnail);
    for (const talent of character.passiveTalents) {
      third.addField(talent.name, talent.description);
    }

    const fourth = new Embed()
      .setTitle(character.name)
      .setDescription([
        "**Constellations**",
        "",
        "ℹ️ - Main info",
        "⚔️ - Skill Talents",
        "🪄 - Passive Talents",
        "🌟 - Constellations",
        "🔼 - Ascension Costs",
      ])
      .setThumbnail(character.thumbnail);
    for (const constellation of character.constellations) {
      fourth.addField(constellation.name, constellation.description);
    }

    const fifth = new Embed()
      .setTitle(` ${character.name} Ascension Cost`)
      .setImage(character.ascensionCost);

    const pages = {
      1: { page: 1, embed: first, emoji: "ℹ️" },
      2: { page: 2, embed: second, emoji: "⚔️" },
      3: { page: 3, embed: third, emoji: "🪄" },
      4: { page: 4, embed: fourth, emoji: "🌟" },
      5: { page: 5, embed: fifth, emoji: "🔼" },
    } as Record<
      number,
      { page: number; embed: Embed; emoji: string } | undefined
    >;

    const page = pages[args.page];
    if (!page) return;

    // SEND FIRST EMBED
    const response = args.msg
      ? await (args.msg as Message).edit({ embed: page.embed }).catch(
        console.log,
      )
      : await message.reply({ embed: page.embed }).catch(console.log);
    if (!response) return;

    const emojis = ["ℹ️", "⚔️", "🪄", "🌟", "🔼"];
    // ADD THE REACTIONS
    if (!args.msg) await response.addReactions(emojis, true).catch(console.log);

    // HANDLE PAGINATION
    const reaction = await needReaction(message.author.id, response.id, {
      filter: (userID, reaction) =>
        message.author.id === userID && page.emoji !== reaction,
    }).catch(console.log);
    if (!reaction) return;

    const selectedPage = Object.values(pages).find((page) =>
      page?.emoji === reaction
    );
    if (!selectedPage) return;

    return botCache.commands
      .get("character")
      ?.execute?.(message, {
        character: args.character,
        page: selectedPage.page,
        msg: response,
      });
  },
});

characters.forEach((c) =>
  createCommand({
    name: c.name.toLowerCase(),
    guildOnly: true,
    execute: async function (message, args, guild) {
      return botCache.commands
        .get("character")
        ?.execute?.(
          message,
          { character: c.name.toLowerCase(), page: 1 },
          guild,
        );
    },
  })
);