import { botCache } from "../../cache.ts";
import { gadgets } from "../constants/gadgets.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
  name: "gadget",
  arguments: [{ name: "name", type: "string", required: false }],
  guildOnly: true,
  execute: async function (message, args) {
    if (!args.name) {
      return message.reply(
        ["Available Gadgets:", "", [...gadgets.keys()].sort().join(" - ")].join(
          "\n",
        ),
      );
    }

    const gadget = gadgets.get(args.name);
    if (!gadget) {
      return message.reply(
        ["Which gadget you searching for?", "", [...gadgets.keys()].join(" - ")]
          .join("\n"),
      );
    }

    const embed = new Embed()
      .setTitle(gadget.name)
      .setDescription([
        `**Source:** ${gadget.source}`,
        "",
        `**Crafting Type:**\n${gadget.craftingType}`,
        "",
        `**Crafting Cost:** ${gadget.craftingCost}`,
        "",
        `**Effect:**\n${gadget.effect}`,
        "",
        `**Description:**\n${gadget.description}`,
      ])
      .setThumbnail(gadget.image)
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});

gadgets.forEach((c, key) =>
  createCommand({
    name: key,
    guildOnly: true,
    execute: async function (message, args, guild) {
      return botCache.commands.get("gadget")?.execute?.(
        message,
        { name: key },
        guild,
      );
    },
  })
);
