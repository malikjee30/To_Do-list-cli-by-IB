#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\nWelcom to To Do List project of CLI\n");

let myloop = true;
let todoListArray: string[] = [];

while (myloop) {
  const userInput = await inquirer.prompt([
    {
      type: "input",
      name: "todoItem",
      message: "Enter item in your To Do list!",
    },
    {
      type: "confirm",
      name: "addMore",
      message: "Do you want to add more items?",
      default: false,
    },
    {
      type: "confirm",
      name: "seeList",
      message: "Do you want to see the List?",
      default: false,
      when(userInput) {
        return userInput.addMore === false;
      },
    },
  ]);
  const { todoItem, addMore, seeList } = userInput;

  if (todoItem) {
    todoListArray.push(todoItem);
  }

  if (seeList) {
    console.log(`\nHere is your To Do List:`);
    todoListArray.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
  myloop = addMore;
}
