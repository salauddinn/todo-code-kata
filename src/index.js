import yargs from "yargs";
import { TODO_BASE_URL } from "./constants/constants.js";
import { fetchTodos, getEvenNumberTodos } from "./command/todoCommands.js";

import { hideBin } from "yargs/helpers";
yargs(hideBin(process.argv))
    .option("evenLimit", {
        alias: "el",
        describe: "Limit number of even numbers TODOs to display and max number will be given as 100",
        default: 20,
        type: "number",
    })
    .command("todos", "Fetch and display TODOs", async (yargs) => {
        try {
            const todos = await fetchTodos(TODO_BASE_URL, yargs.argv.evenLimit * 2);
            const filteredTodos = await getEvenNumberTodos(
                todos,
                yargs.argv.evenLimit
            );
            console.log("==============================start======================================")
            console.log(
                "Titles and Completion Status of the first 20 even numbered TODOs:"
            );
            filteredTodos.forEach((todo) =>
                console.log(`${todo.title} - ${todo.completed}`)
            );
            console.log("===============================end=====================================")
        } catch (error) {
            console.error(error.message);
        }
    })
    .help()
    .parse();
