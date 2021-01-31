import { botCache } from "../../cache.ts";
import { Member } from "../../deps.ts";
import { characters } from "../constants/character.ts";
import { db } from "../database/database.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand } from "../utils/helpers.ts";

const categories = [
  { name: "Anemo", emoji: "<:Anemo:798483595781341194>" },
  { name: "Cryo", emoji: "<:Cryo:798483525052530719>" },
  { name: "Electro", emoji: "<:Electro:798483560205385799>" },
  { name: "Geo", emoji: "<:Geo:798483630740865044>" },
  { name: "Hydro", emoji: "<:Hydro:798483587157983282>" },
  { name: "Pyro", emoji: "<:Pyro:798483485832249354>" },
  { name: "Dendro", emoji: "<:Dendro:798483507076399184>" },
];

createCommand({
  name: "profile",
  guildOnly: true,
  arguments: [{ name: "member", type: "member", required: false }],
  execute: async function (message, args: CommandArgs) {
    const member = args.member || message.member;
    if (!member) return;

    const settings = await db.users.get(member.id);
    if (!settings) {
      if (message.author.id !== member.id) {
        return message
          .reply(
            "No profile found for this user yet. They must run the setup command first.",
          )
          .catch(console.log);
      }

      await message.reply(
        `You have not yet completed the profile setup. Running the setup command for you now.`,
      );
      return botCache.commands.get("setup")?.execute?.(message, args);
    }

    const embed = new Embed()
      .setAuthor(member.tag, member.avatarURL)
      .setDescription([
        `**UID:** ${settings.uid}`,
        `**AR:** ${settings.adventurerRank}`,
        `**WL:** ${settings.worldLevel}`,
      ])
      .setThumbnail(member.avatarURL);

    for (
      const category of categories.sort(
        (a, b) =>
          settings.characters.filter((c) =>
            characters.get(c.name)?.category === b.name
          ).length -
          settings.characters.filter((c) =>
            characters.get(c.name)?.category === a.name
          ).length,
      )
    ) {
      embed.addField(
        `${category.emoji} ${category.name}`,
        settings.characters
          // SORT HIGHEST TO LOWEST
          .sort((a, b) => b.constellationLevel - a.constellationLevel)
          .map((character) => {
            const char = characters.get(character.name.toLowerCase());
            // NOT A CHAR IN CONSTANTS
            if (!char) return "";

            // NOT FOR THIS CATEGORY
            if (char.category !== category.name) return "";
            // CHAR DETAILS
            return `${
              char ? `${char.emoji} ` : ""
            }${character.name} C${character.constellationLevel}`;
          })
          // REMOVES EMPTY STRINGS
          .filter((x) => x)
          // JOIN TO 1 STRING OR DEFAULT TO NA IF EMPTY
          .join("\n") || "NA",
        true,
      );
    }

    await message.reply({ embed }).catch(console.log);
  },
});

interface CommandArgs {
  member: Member;
}
