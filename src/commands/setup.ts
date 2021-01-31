import { Message, sendDirectMessage } from "../../deps.ts";
import { characters } from "../constants/character.ts";
import { db } from "../database/database.ts";
import { needMessage, needReaction } from "../utils/collectors.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "setup",
  execute: async function (message) {
    if (message.guildID) {
      const dm = await sendDirectMessage(
        message.author.id,
        "Thanks for letting me guide you through the setup of your profile!",
      ).catch(async (error) => {
        // DMS MAY BE BLOCKED
        await message
          .alertReply(
            "You may have your DM's blocked or too many users are using the bot at the moment.",
          )

        console.log(error);
      });

      await message.reply(
        "Sent you a DM to guide you through the setup of your profile!",
      );
      if (!dm) return;
    } else {
      // WELCOME USER
      await sendDirectMessage(
        message.author.id,
        "Thanks for letting me guide you through the setup of your profile!",
      ).catch(console.log);
    }

    const ownedCharacters = [];
    const skipChars = ["Traveler (Geo)", "Traveler (Anemo)"];

    // LOOP OVER ALL CHARACTERS ASKING THE USER IF THEY OWN THIS CHARACTER.
    for (const character of characters.values()) {
      if (skipChars.includes(character.name)) continue;

      // SENDS THE QUESTION TO THE USER
      const hasCharQuestion = await sendDirectMessage(
        message.author.id,
        `Do you own **${character.name}**? ${character.emoji}`,
      ).catch(console.log);
      // SOMETHING WENT WRONG AND COULD NOT SEND MESSAGE
      if (!hasCharQuestion) return;

      // ADDS THE REACTIONS USER WILL ADD
      await hasCharQuestion.addReactions(["✅", "❌"]).catch(console.log);
      // WAITS FOR USER TO GIVE A REACTION.
      const hasChar = await needReaction(message.author.id, hasCharQuestion.id)
        .catch(console.log);
      // IF THEY DON'T OWN SKIP TO NEXT CHARACTER
      if (hasChar === "❌") continue;

      // THE USER DIDN"T RESPOND SO CANCEL
      if (!hasChar) {
        await sendDirectMessage(
          message.author.id,
          "Did you fall asleep? Let's try again later..",
        ).catch(console.log);
        // CANCEL OUT
        return;
      }

      // SINCE THE USER OWNS THIS CHARACTERS WE CAN ASK FOR MORE INFO
      await sendDirectMessage(
        message.author.id,
        [
          `Nice! You own ${character.name}, now let's figure out the constellation.`,
          "",
          "On what constellation is your character? Between 0-6",
        ].join("\n"),
      ).catch(console.log);

      // WAIT FOR CONSTELLATION LEVEL RESPONSE
      const constellationLevel = await needMessage(
        message.author.id,
        hasCharQuestion.channelID,
        {
          filter: validateNumberFilter,
        },
      ).catch(console.log);
      // THE USER PROVIDED NO VALID RESPONSE IN THE TIME GIVEN
      if (!constellationLevel) {
        await sendDirectMessage(message.author.id, "Cancelling setup...").catch(
          console.log,
        );
        // CANCEL OUT
        return;
      }

      // ADD TO ARRAY WHICH WE SAVE TO DATABASE LATER
      ownedCharacters.push({
        name: character.name,
        constellationLevel: Number(constellationLevel.content),
      });
    }

    // ALL CHARACTER QUESTIONS ARE COMPLETE
    await sendDirectMessage(
      message.author.id,
      "Niceuh! All the character profiles are complete. Only couple more things to go.",
    ).catch(console.log);

    // ASK FOR USER UID
    const needUID = await sendDirectMessage(
      message.author.id,
      "What is your UID? Type `skip` if you do not want to provide one.",
    ).catch(console.log);
    if (!needUID) return;

    // WAIT FOR A RESPONSE FROM USER
    const uidResponse = await needMessage(message.author.id, needUID.channelID);
    let uid = "Not Available";
    // IF NO RESPONSE GIVEN ERROR OUT
    if (!uidResponse) {
      await sendDirectMessage(message.author.id, "Cancelling setup...").catch(
        console.log,
      );
      return;
    } else {
      // ONLY CHECK IF THE UID IS NOT SKIP
      if (uidResponse.content !== "skip") {
        // VALIDATE THE PROVIDED UID
        if (Number(uidResponse.content) && uidResponse.content.length <= 10) {
          // A VALID UID WAS PROVIDED SO SET IT
          uid = uidResponse.content;
        } else {
          await sendDirectMessage(
            message.author.id,
            "The UID provided was invalid, skipping... To set your UID afterwards, use **p!edit uid #**",
          ).catch(console.log);
        }
      }
    }

    // ASK FOR WORLD LEVEL
    await sendDirectMessage(
      message.author.id,
      "What is your World Level? Between 0-8",
    ).catch(console.log);

    // WAIT FOR A RESPONSE FROM USER
    const worldLevelResponse = await needMessage(
      message.author.id,
      needUID.channelID,
      {
        // MAX IS 8. MIN IS 0
        filter: (msg) => validateNumberFilter(msg, 8),
      },
    );
    if (!worldLevelResponse && worldLevelResponse !== 0) {
      await sendDirectMessage(
        message.author.id,
        "A world level was not provided, defaulting to 0.",
      ).catch(console.log);
    }

    // ASK FOR ADVENTURER RANK
    await sendDirectMessage(
      message.author.id,
      "What is your Adventurer Rank? Between 1-60",
    ).catch(console.log);

    // WAIT FOR A RESPONSE FROM USER
    const adventurerRankResponse = await needMessage(
      message.author.id,
      needUID.channelID,
      {
        // MAX IS 60. MIN IS 1
        filter: (msg) => validateNumberFilter(msg, 60, 1),
      },
    );
    if (!adventurerRankResponse) {
      await sendDirectMessage(
        message.author.id,
        "An adventurer rank was not provided, defaulting to 1.",
      ).catch(
        console.log,
      );
    }

    // ALL Q&A IS COMPLETE!
    await db.users
      .update(message.author.id, {
        uid,
        characters: ownedCharacters,
        adventurerRank: Number(adventurerRankResponse.content) || 0,
        worldLevel: Number(worldLevelResponse.content) || 1,
      })
      .catch(console.log);

    return sendDirectMessage(
      message.author.id,
      "Your profile setup is complete.",
    );
  },
});

/** Validates if a message content is a number between two numbed.
 *
 * max defaults to 6
 *
 * min defaults to 0
 */
function validateNumberFilter(message: Message, max = 6, min = 0) {
  // VALIDATE THAT THE RESPONSE IS A NUMBER
  const number = Number(message.content);
  // IF NOT A VALID NUMBER IGNORE THIS MESSAGE
  if ((!number && number !== 0) || number < min || number > max) {
    sendDirectMessage(
      message.author.id,
      `That was not a valid number, please try again. The number must be between ${min}-${max}`,
    ).catch(console.log);
    return false;
  }

  return true;
}
