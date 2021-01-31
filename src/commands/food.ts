import { botCache } from "../../cache.ts";
import { foods } from "../constants/foods.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
  name: "food",
  arguments: [{ name: "name", type: "string", required: false }],
  guildOnly: true,
  execute: async function (message, args) {
    if (!args.name) {
      return message.reply(
        ["Available Food:", "", [...foods.keys()].sort().join(" - ")].join(
          "\n",
        ),
      );
    }

    const food = foods.get(args.name);
    if (!food) {
      return message.reply(
        [
          "Did you say... **FOOD**? Which one?!",
          "",
          [...foods.keys()].join(" - "),
        ].join("\n"),
      );
    }

    const embed = new Embed()
      .setTitle(food.name)
      .setDescription([
        `**Rarity:** ${food.stars}`,
        "",
        `**Dish Type:** ${food.dishType}`,
        "",
        `**Proficiency:** ${food.proficiency}`,
        "",
        `**How to obtain:**\n${food.obtainable}`,
        "",
        `**Ingredients:** ${food.recipe}`,
        "",
        `**Description:**\n${food.description}`,
        "",
        `**Effect:**\n${food.effect}`,
      ])
      .setThumbnail(food.image)
      .setColor(food.color);

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});

foods.forEach((c, key) =>
  createCommand({
    name: key,
    guildOnly: true,
    execute: async function (message, args, guild) {
      return botCache.commands.get("food")?.execute?.(
        message,
        { name: key },
        guild,
      );
    },
  })
);
