import prompts from "prompts";
import chalk from "chalk";
import * as fs from "fs/promises";
import { exec } from "child_process";
import * as util from "util";

(async () => {
  const asyncExec = util.promisify(exec);
  try {
    const { todoValue } = await prompts(
      {
        type: "select",
        name: "todoValue",
        message: "Select command",
        choices: [
          {
            title: "new",
            value: "new",
            description: "used to create a new todo",
          },
          {
            title: "get",
            value: "get",
            description: "used to retrieve your todos",
          },
          {
            title: "complete",
            value: "complete",
            description: "used to mark a todo as complete",
          },
        ],
      },
      {
        onCancel: () => {
          console.log("Never stop prompting!");
          return true;
        },
      }
    );

    switch (todoValue) {
      case "new":
        const { item } = await prompts({
          type: "text",
          name: "item",
          message: "Enter your todo item",
        });
        await fs.appendFile("message.txt", item + "\n", "utf8");
        return;
      case "get":
        return;
      case "complete":
        const ls = await asyncExec("npm install prettier");
        console.log(ls.stdout)
        return;
      default:
        return;
    }
  } catch (e) {
    const eLog = chalk.red(e);
    console.log(eLog);
  }
})();
