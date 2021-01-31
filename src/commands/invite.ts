import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: `invite`,
  execute: function (message) {
    // Replace the permission number at the end to request the permissions you wish to request. By default, this will request Admin perms.
    message.reply(
      `https://discord.com/oauth2/authorize?client_id=798565359006253077&scope=bot&permissions=1812458561`,
    );
  },
});
