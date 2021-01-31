import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "materials",
  aliases: ["material"],
  guildOnly: true,
      execute: async function (message) {
        const firstEmbed = new Embed()
        .setTitle("Help Material")
        .setDescription([
          "**Ascension Gems**",
          "🔹 `p!material [agnidusagate | agndius | aa]`",
          "🔹 `p!material [brilliantdiamond | diamond | bd]`",
          "🔹 `p!material [prithivatopaz | prithi | pv]`",
          "🔹 `p!material [vajradaamethyst | vajrada | va]`",
          "🔹 `p!material [varunadalazurite | varunada | vl]`",
          "🔹 `p!material [vayudaturquoise | vayuda | vt]`",
          "",
          "**Talent Level-Up Materials**",
          "🔹 `p!material [ballad | teachingsofballad | guidetoballad | philosophiesofballad]`",
          "🔹 `p!material [diligence | teachingsofdiligence | guidetodiligence | philosophiesofdiligence]`",
          "🔹 `p!material [freedom | teachingsoffreedom | guidetofreedom | philosophiesoffreedom]`",
          "🔹 `p!material [gold | teachingsofgold | guidetogold | philosophiesofgold]`",
          "🔹 `p!material [prosperity | teachingsofprosperity | guidetoprosperity | philosophiesofprosperity]`",
          "🔹 `p!material [resistance | teachingsofresistance | guidetoresistance | philosophiesofresistance]`",
        ])
        .setFooter("Page 1/2")
        .setTimestamp()
        .setColor("RANDOM");
    
        const secondEmbed = new Embed()
        .setTitle("Grain of Aerosiderite")
        .setDescription([
          "🔹 `p!material crownofinsight`",
          "🔹 `p!material dvalinsclaw`",
          "🔹 `p!material dvalinsplume`",
          "🔹 `p!material dvalinssigh`",
          "🔹 `p!material ringofboreas`",
          "🔹 `p!material shadowofthewarriors`",
          "🔹 `p!material [shardofafoullegacy | foullegacy]`",
          "🔹 `p!material [spiritlocketofboreas | spiritlocket]`",
          "🔹 `p!material [tuskofmonoceroscaeli | tuskofmonoceros | monoceroscaeli | monoceros]`",
          "",
          "🔹 `p!material [aerosiderite | pieceofaerosiderite | grainofaerosiderite | bitofaerosiderite | chunkofaerosiderite]`",
          "🔹 `p!material [boreal | borealwolf | borealwolfs | borealwolfsmilktooth | borealwolfsbrokenfang | borealwolfscrackedtooth | borealwolfsnostalgia | milktooth | brokenfang | crackedtooth | nostalgia]`",
          "🔹 `p!material [dandeliongladiator | fettersofthedandeliongladiator | chainsofthedandeliongladiator | shacklesofthedandeliongladiator | dreamofthedandeliongladiator]`",
          "🔹 `p!material [mistveiled | mistveiledleadelixir | mistveiledmercuryelixir | mistveiledgoldelixir | mistveiledprimoelixir]`",
          ])
          .setFooter("Page 2/2")
          .setTimestamp()
          .setColor("RANDOM");

      createPagination(message, [
        firstEmbed,
        secondEmbed,
      ]);
    },
  });
  
  export async function createPagination(
    message: Message,
    embeds: Embed[],
    page = 1,
  ): Promise<void> {
    if (embeds.length === 0) {
      return;
    }
  
    const { channelID, author } = message;
  
    let currentPage: number = page - 1;
  
    let embedMessage = await sendEmbed(channelID, embeds[currentPage]);
  
    if (!embedMessage) {
      return;
    }
  
    if (embeds.length <= 1) {
      return;
    }
  
    try {
      addReactions(
        embedMessage.channelID,
        embedMessage.id,
        ["⏮️", "◀️", "▶️", "⏭️"],
        true,
      );
    } catch (e) {
      console.error(e);
      return;
    }
  
    while (true) {
      if (!embedMessage) {
        return;
      }
      const reaction = await needReaction(author.id, embedMessage.id);
  
      if (!reaction) {
        return;
      }
  
      if (
        !(removeUserReaction(
          message.channelID,
          embedMessage.id,
          reaction,
          message.author.id,
        ).catch(console.error))
      ) {
        return;
      }
  
      if (reaction === "◀️") {
        currentPage--;
      } else if (reaction === "▶️") {
        currentPage++;
      } else if (reaction === "⏮️") {
        currentPage = 0;
      } else if (reaction === "⏭️") {
        currentPage = embeds.length - 1;
      } else {
        continue;
      }
  
      if (currentPage < 0) {
        currentPage = 0;
      }
  
      if (currentPage > embeds.length - 1) {
        currentPage = embeds.length - 1;
      }
  
      if (!embedMessage) {
        return;
      }
  
      if (
        !(await editEmbed(embedMessage, embeds[currentPage]).catch(console.error))
      ) {
        return;
      }
    }
  }
  