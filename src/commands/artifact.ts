import { botCache } from "../../cache.ts";
import { artifacts } from "../constants/artifacts.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
  name: "artifact",
  arguments: [{ name: "name", type: "string", required: false }],
  guildOnly: true,
  execute: async function (message, args) {
    if (!args.name) {
      return message.reply(
        ["Available Artificats:", "", [...artifacts.keys()].sort().join(" - ")]
          .join(
            "\n",
          ),
      );
    }

    const artifact = artifacts.get(args.name);
    if (!artifact) {
      return message.reply(
        [
          "Paimon can't find your artifact set.. Try one of these:",
          "",
          [...artifacts.keys()].sort().join(" - "),
        ].join(
          "\n",
        ),
      );
    }

    const embed = new Embed()
      .setTitle(artifact.name)
      .setDescription([
        `**Max. Rarity:**\n${artifact.stars}`,
        "",
        `**Set Bonus:**\n${artifact.setBonus}`,
        "",
        `**Obtainable from:**\n${artifact.dropsFrom}`,
        "",
        `**More Info:**\n${artifact.moreInfo}`,
      ])
      .setThumbnail(artifact.thumbnail)
      .setColor(artifact.color);

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});

artifacts.forEach((c, key) =>
  createCommand({
    name: key,
    guildOnly: true,
    execute: async function (message, args, guild) {
      return botCache.commands.get("artifact")?.execute?.(message, {
        name: key,
      }, guild);
    },
  })
);
