import { Message, MessageContent, sendDirectMessage } from "../../../deps.ts";
import { characters } from "../../constants/character.ts";
import { db } from "../../database/database.ts";
import { createCommand, createSubcommand } from "../../utils/helpers.ts";

function sendDMOrResponse(message: Message, content: string | MessageContent) {
  if (message.guildID) {
    return message.reply(content).catch(console.log);
  }

  return sendDirectMessage(message.author.id, content).catch(console.log);
}

createCommand({
  name: "edit",
  aliases: ["add"],
  arguments: [{ name: "subcommand", type: "subcommand" }],
});

createSubcommand("edit", {
  name: "uid",
  arguments: [
    {
      name: "uid",
      type: "number",
      missing: (message) =>
        message.reply("Only numbers can be provided as UID").catch(console.log),
    },
  ],
  execute: async function (message, args) {
    if (String(args.uid).length > 10) {
      return sendDMOrResponse(
        message,
        "The UID must be less than 10 characters.",
      );
    }

    db.users
      .update(message.author.id, { uid: args.uid })
      .then(() =>
        sendDMOrResponse(message, "Edited the UID!").catch(console.log)
      )
      .catch(console.log);
  },
});

createSubcommand("edit", {
  name: "worldlevel",
  aliases: ["wl"],
  arguments: [
    {
      name: "level",
      type: "number",
      missing: (message) =>
        message.reply("The world level must be between 0-8").catch(console.log),
    },
  ],
  execute: async function (message, args) {
    if (args.level < 0 || args.level > 8) {
      return sendDMOrResponse(message, "The world level must be between 0-8");
    }

    db.users
      .update(message.author.id, { worldLevel: args.level })
      .then(() =>
        sendDMOrResponse(message, "Edited the World Level!").catch(console.log)
      )
      .catch(console.log);
  },
});

createSubcommand("edit", {
  name: "adventurerrank",
  aliases: ["ar"],
  arguments: [
    {
      name: "level",
      type: "number",
      missing: (message) =>
        message.reply("The adventurer rank must be between 1-60").catch(
          console.log,
        ),
    },
  ],
  execute: async function (message, args) {
    if (args.level < 1 || args.level > 60) {
      return sendDMOrResponse(
        message,
        "The adventurer rank must be between 1-60",
      );
    }

    db.users
      .update(message.author.id, { adventurerRank: args.level })
      .then(() =>
        sendDMOrResponse(message, "Edited the Adventurer Rank!").catch(
          console.log,
        )
      )
      .catch(console.log);
  },
});

createSubcommand("edit", {
  name: "character",
  aliases: ["char", "c"],
  arguments: [
    {
      name: "character",
      type: "string",
      missing: (message) =>
        message.reply("You forgot to provide a char and the constellation")
          .catch(console.log),
    },
    {
      name: "level",
      type: "number",
      missing: (message) =>
        message.reply("You forgot to provide the constellation (0-6)").catch(
          console.log,
        ),
    },
  ],
  execute: async function (message, args) {
    const character = characters.get(args.character);
    if (!character) {
      return sendDMOrResponse(message, "Invalid character name.").catch(
        console.log,
      );
    }

    if (args.level < 0 || args.level > 6) {
      return sendDMOrResponse(message, "Invalid character constellation.")
        .catch(console.log);
    }

    const settings = await db.users.get(message.author.id);
    if (!settings) {
      return sendDMOrResponse(message, "I can't find this profile.. ").catch(
        console.log,
      );
    }

    if (settings.characters.some((c) => c.name === character.name)) {
      settings.characters = settings.characters.map((c) =>
        c.name === character.name
          ? { name: c.name, constellationLevel: args.level }
          : c
      );
    } else {
      settings.characters.push({
        name: character.name,
        constellationLevel: args.level,
      });
    }

    db.users
      .update(message.author.id, {
        characters: settings.characters,
      })
      .then(() =>
        sendDMOrResponse(message, "Edited the character!").catch(console.log)
      )
      .catch(console.log);
  },
});
