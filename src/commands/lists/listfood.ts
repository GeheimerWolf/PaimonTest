import { botCache, Message } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("list", {
  name: "food",
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {
    const first = new Embed()
      .setTitle("Rarity ⭐")
      .setDescription([
        "",
        "Apple 🔹 Chicken-Mushroom Skewer 🔹 Grilled Tiger Fish 🔹 Definitely Not Bar Food! 🔹 Flash-Fried Filet 🔹 Fruity Skewers 🔹 Mondstadt Grilled Fish 🔹 Mora Meat 🔹 Outrider's Champion Steak! 🔹 Pop's Teas 🔹 Qiankun Mora Meat 🔹 Radish Veggie Soup 🔹 Steak 🔹 Stir-Fried Filet 🔹 Sunsettia 🔹 Survival Grilled Fish 🔹 Teyvat Charred Egg 🔹 Teyvat Fried Egg",
        "",
        "If you want to search for food/dish infos, type `p!food (name)`\nThe foodname has to be lower case and without spacing. For example `p!food grilledtigerfish`",
        "",
        `1️⃣ Rarity ⭐`,
        `2️⃣ Rarity ⭐⭐`,
        `3️⃣ Rarity ⭐⭐⭐`,
        `4️⃣ Rarity ⭐⭐⭐⭐`,
        `5️⃣ Rarity ⭐⭐⭐⭐⭐`,
      ]);

    const second = new Embed()
      .setTitle("Rarity ⭐⭐")
      .setDescription([
        "",
        "Almond Tofu 🔹 All-Delicacy Parcels 🔹 Apple Cider 🔹 Berry & Mint Burst 🔹 Cold Noodles with Mountain Delicacies 🔹 Cream Stew 🔹 Crystal Shrimp 🔹 Der Weisheit Letzter Schluss (Life) 🔹 Fish-Flavored Toast 🔹 Fisherman's Toast 🔹 Flaming Red Bolognese 🔹 Fried Radish Balls 🔹 Goulash 🔹 Jewelry Soup 🔹 Jueyun Chili Chicken 🔹 Lighter-Than-Air Pancake 🔹 Lotus Seed and Bird Egg Soup 🔹 Matsutake Meat Rolls 🔹 Mysterious Bolognese 🔹 Noodles with Mountain Delicacies 🔹 Rockin' Riffin' Chicken! 🔹 Northern Smoked Chicken 🔹 Satisfying Salad 🔹 Spicy Stew 🔹 Sweet Madame 🔹 Tea Break Pancake 🔹 Wolfhook Juice",
        "",
        "If you want to search for food/dish infos, type `p!food (name)`\nThe foodname has to be lower case and without spacing. For example `p!food grilledtigerfish`",
        "",
        `1️⃣ Rarity ⭐`,
        `2️⃣ Rarity ⭐⭐`,
        `3️⃣ Rarity ⭐⭐⭐`,
        `4️⃣ Rarity ⭐⭐⭐⭐`,
        `5️⃣ Rarity ⭐⭐⭐⭐⭐`,
      ]);

    const third = new Embed()
      .setTitle("Rarity ⭐⭐⭐")
      .setDescription([
        "",
        "A Buoyant Breeze 🔹 A Prize Catch 🔹 Adventurer's Breakfast Sandwich 🔹 Bamboo Shoot Soup 🔹 Barbatos Ratatouille 🔹 Black-Back Perch Stew 🔹 Calla Lily Seafood Soup 🔹 Cold Cut Platter 🔹 Come and Get It 🔹 Crab, Ham & Veggie Bake 🔹 Die Heilige Sinfonie 🔹 Golden Shrimp Balls 🔹 Holy Water 🔹 Invigorating Pizza 🔹 Jueyun Guoba 🔹 Lotus Flower Crisp 🔹 Mondstadt Hash Brown 🔹 Mushroom Pizza 🔹 No Tomorrow 🔹 Northern Apple Stew 🔹 Nutritious Meal (V. 593) 🔹 Once Upon a Time in Mondstadt 🔹 Pile 'Em Up 🔹 Prosperous Peace 🔹 Puppy-Paw Hash Brown 🔹 Qingce Stir Fry 🔹 Sautéed Matsutake 🔹 Slow-Cooked Bamboo Shoot Soup 🔹 Squirrel Fish 🔹 Sticky Honey Roast 🔹 Sunshine Sprat 🔹 Triple-Layered Consommé 🔹 Universal Peace 🔹 Wanmin Restaurant's Boiled Fish 🔹 Woodland Dream 🔹 Zhongyuan Chop Suey",
        "",
        "If you want to search for food/dish infos, type `p!food (name)`\nThe foodname has to be lower case and without spacing. For example `p!food grilledtigerfish`",
        "",
        `1️⃣ Rarity ⭐`,
        `2️⃣ Rarity ⭐⭐`,
        `3️⃣ Rarity ⭐⭐⭐`,
        `4️⃣ Rarity ⭐⭐⭐⭐`,
        `5️⃣ Rarity ⭐⭐⭐⭐⭐`,
      ]);

    const fourth = new Embed()
      .setTitle("Rarity ⭐⭐⭐⭐")
      .setDescription([
        "",
        "Golden Crab 🔹 Jade Parcels 🔹 Moon Pie 🔹 Tianshu Meat",
        "",
        "If you want to search for food/dish infos, type `p!food (name)`\nThe foodname has to be lower case and without spacing. For example `p!food grilledtigerfish`",
        "",
        `1️⃣ Rarity ⭐`,
        `2️⃣ Rarity ⭐⭐`,
        `3️⃣ Rarity ⭐⭐⭐`,
        `4️⃣ Rarity ⭐⭐⭐⭐`,
        `5️⃣ Rarity ⭐⭐⭐⭐⭐`,
      ]);

    const fifth = new Embed()
      .setTitle("Rarity ⭐⭐⭐⭐⭐")
      .setDescription([
        "",
        "Adeptus' Temptation",
        "",
        "If you want to search for food/dish infos, type `p!food (name)`\nThe foodname has to be lower case and without spacing. For example `p!food grilledtigerfish`",
        "",
        `1️⃣ Rarity ⭐`,
        `2️⃣ Rarity ⭐⭐`,
        `3️⃣ Rarity ⭐⭐⭐`,
        `4️⃣ Rarity ⭐⭐⭐⭐`,
        `5️⃣ Rarity ⭐⭐⭐⭐⭐`,
      ]);

    const pages = {
      1: { page: 1, embed: first, emoji: "1️⃣" },
      2: { page: 2, embed: second, emoji: "2️⃣" },
      3: { page: 3, embed: third, emoji: "3️⃣" },
      4: { page: 4, embed: fourth, emoji: "4️⃣" },
      5: { page: 5, embed: fifth, emoji: "5️⃣" },
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

    const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];
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
      .get("list")?.subcommands?.get("food")
      ?.execute?.(message, {
        character: args.character,
        page: selectedPage.page,
        msg: response,
      });
  },
});
