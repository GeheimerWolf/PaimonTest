import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "material",
  arguments: [{ name: "subcommand", type: "subcommand" }],
});
