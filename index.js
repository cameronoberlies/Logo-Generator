const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const {shapesJS} = require('./lib/shapes');
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
      name: "textcolor",
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
      name: "shapecolor",
    },
  ]);
};

    const init = () => {
        promptUser()
        .then((answers) => writeFile('logo.svg', shapesJS(answers)))
        .then(() => console.log('Successfully created file'))
        .then((err) => console.error(err))
    };

    init();
