const inquirer = require("inquirer");
const { writeFile } = require("fs");
const shapesJS = require('./lib/shapes');
//const canvas = require("svg-canvas");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Please enter up to 3 characters",
      name: "characters",
    },
    {
      type: "input",
      message: "Choose a text color",
      name: "text-color",
    },
    {
      type: "list",
      message: "Choose a shape",
      name: "shape",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      message: "Choose a shape color",
      name: "shape-color",
    },
  ]);
};

    const init = () => {
        promptUser()
        .then((answers) => writeFile('logo.svg', shapesJS(answers)))
        .then(() => console.log('Successfully created file'))
        .then(() => console.error(err))
    };

    init();
