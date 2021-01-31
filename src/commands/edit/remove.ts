import { characters } from "../../constants/character.ts";
import { db } from "../../database/database.ts";
import { createCommand } from "../../utils/helpers.ts";

createCommand({
  name: "remove",
  arguments: [{ name: "name", type: "...string", lowercase: true }],
  guildOnly: true,
  execute: async function (message, args) {
    const character = characters.get(args.name);
    if (!character) {
      return await message.reply("Invalid character name.").catch(console.log);
    }

    const settings = await db.profile.get(message.author.id);
    if (!settings) {
      return await message.reply("You have not setup your profile yet.");
    }

    await db.profile.update(message.author.id, {
      characters: settings.characters.filter((c) => c.name !== character.name),
    });
    return await message.reply(`${character.name} has left your team...`);
  },
});
