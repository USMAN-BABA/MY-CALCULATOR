#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First number", type: "number", name: "FirstNumber" },
    { message: "Enter Second number", type: "number", name: "SecondNumber" },
    { message: "selct one of of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/",] },
]);
if (answer.operator === "+") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "-") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "*") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "/") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else
    ("please enter valid operator");
