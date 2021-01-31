import { db } from "../database/database.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "reset",
  execute: async function (message) {
    db.users.delete(message.author.id);
    await message.reply("Your profile has now been reset.");
  },
});
