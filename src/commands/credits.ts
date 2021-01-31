import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
  name: `credits`,
  arguments: [
    {
      name: "command",
      type: "string",
      lowercase: true,
      required: false,
    },
  ],
  execute: function (message, args: HelpArgs) {
    if (!args.command) {
      return sendEmbed(
        message.channelID,
        new Embed()
          .setTitle("Special Thanks to following Traveler!")
          .setDescription([
            "",
          ])
          .addField("John Without Gel", "for coding me the Bot!")
          .addField(
            "Ice Man",
            "for helping me fill out the informations aswell as testing alot!",
          )
          .addField("The Galaxy.", "for finding some bugs!")
          .setThumbnail(
            "https://i.pinimg.com/originals/67/9f/5e/679f5e627d25307be45172fd41b3ca3e.png",
          ),
      );
    }
  },
});

interface HelpArgs {
  command?: string;
}
