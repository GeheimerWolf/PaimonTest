import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "shadowofthewarrior",
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Shadow of the Warrior")
      .setDescription([
        `**Rarity:** ⭐⭐⭐⭐⭐`,
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Shadow of the Warrior is used to level talents for the following characters:",
        "<:Ganyu:798579013084774504> Ganyu",
        "",
        "**Source:**",
        "Lv. 70+ Childe Challenge Reward",
        "",
        "**Description:**",
        "A fragment of power that you obtained from defeating Childe, who had unleashed the might of his Delusion.\nIt is the product of a will to fight that has been honed over countless slaughters.\nIf humans do indeed have destinies, then his must surely have been twisted by such deeds. Why else, then, would he always be at the heart of every conflict?",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Shadow_of_the_Warrior.png/revision/latest/scale-to-width-down/256?cb=20210106065852",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Shadow_of_the_Warrior.png/revision/latest/scale-to-width-down/256?cb=20210106065852",
      )
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
