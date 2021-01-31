import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("list", {
  name: "artifacts",
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Artifactlist")
      .setDescription([
        `**Max. Rarity:** ⭐⭐⭐`,
        "Adventurer 🔹 Lucky Dog 🔹 Traveling Doctor",
        "",
        `**Max. Rarity:** ⭐⭐⭐⭐`,
        "Instructor 🔹 Berserker 🔹 The Exile 🔹 Brave Heart 🔹 Resolution of Sojourner 🔹 Martial Artist 🔹 Gambler 🔹 Defender's Will 🔹 Scholar 🔹 Tiny Miracle 🔹 Prayers for Illumination 🔹 Prayers for Destiny 🔹 Prayers for Wisdom 🔹 Prayers to Springtime",
        "",
        `**Max. Rarity:** ⭐⭐⭐⭐⭐`,
        "Gladiator's Finale 🔹 Wanderer's Troupe 🔹 Noblesse Oblige 🔹 Maiden Beloved 🔹 Retracing Bolide 🔹 Crimson Witch of Flames 🔹 Lavawalker 🔹 Heart of Depth 🔹 Thundering Fury 🔹 Thundersoother 🔹 Viridescent Venerer 🔹 Blizard Strayer 🔹 Archaic Petra 🔹 Bloodstained Chivalry",
        "",
        "If you want to search for artifact infos, type `p!artifact (name)`\nThe artifact name has to be lower case and without spacing. For example `p!artifact defenderswill`",
      ]);

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
