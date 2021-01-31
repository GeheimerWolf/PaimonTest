import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "list",
  arguments: [{ name: "subcommand", type: "subcommand" }],
});
