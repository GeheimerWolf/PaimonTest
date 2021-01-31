import { botCache } from "../../cache.ts";
import { weapons } from "../constants/weapons.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
  name: "weapon",
  arguments: [{ name: "name", type: "string", required: false }],
  guildOnly: true,
  execute: async function (message, args) {
    if (!args.name) {
      return message.reply(
        ["Available Weapons:", "", [...weapons.keys()].sort().join(" - ")].join(
          "\n",
        ),
      );
    }

    const weapon = weapons.get(args.name);
    if (!weapon) {
      return message.reply(
        [
          "Invalid weapon name provided. Valid names are:",
          "",
          [...weapons.keys()].sort().join(" - "),
        ].join("\n"),
      );
    }

    const embed = new Embed()
      .setTitle(weapon.name)
      .setDescription([
        `**Rarity:** ${weapon.stars}`,
        "",
        `**Category:** ${weapon.category}`,
        "",
        `**Description:**\n${weapon.description}`,
        "",
        `**Base Attack:** ${weapon.baseAttack}`,
        `**Secondary Stat:** ${weapon.secondaryStat}`,
        `**Secondary Stat Value:** ${weapon.secondaryStatValue}`,
        `**Passive Ability Name:** ${weapon.specialAbility}`,
        "",
        `**Refinement:**\n${weapon.refinement}`,
        "",
        `**More Info:**\n${weapon.moreInfo}`,
      ])
      .setThumbnail(weapon.thumbnail)
      .setColor(weapon.color);

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});

weapons.forEach((c, key) =>
  createCommand({
    name: key,
    guildOnly: true,
    execute: async function (message, args, guild) {
      return botCache.commands.get("weapon")?.execute?.(
        message,
        { name: key },
        guild,
      );
    },
  })
);
