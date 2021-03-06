const generateHTML = require('./src/generateHTML')


const fs = require('fs');
const inquirer = require("inquirer");
const path = require('path');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');


const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");



const employeeArray = [];
const employeeIdArray = [];
function menu(){


const createManager = () => {
  inquirer.prompt([

    {
      name: "name",
      type: "input",
      message: "What is the managers name?"

    },
    {
      name: "id",
      type: "input",
      message: "Enter managers Id.",
    },
    {
      name: "email",
      type: "input",
      message: "Enter managers email.",
    },
    {
      name: "officeNumber",
      type: "input",
      message: "Enter managers office number.",
    },


  ]).then(managerInput => {
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager(name, id, email, officeNumber);

    employeeArray.push(manager);
    employeeIdArray.push(managerInput.id);
    creatTeam()
  });

}

function creatTeam() {
  inquirer.prompt([
    {
      name: "addEmployee",
      type: "list",
      message: "Choose your employee's role.",
      choices: ['Engineer', 'Intern', 'done']
    },
  ]).then(userChoice => {
    switch (userChoice.addEmployee) {
      case "Engineer":
        engineerInput();
        break;
      case "Intern":
        internInput();
        break;
      default:
        buildTeam()
    }
  });

}

const engineerInput = () => {

  inquirer.prompt([
    
    {
      name: "name",
      type: "input",
      message: "Enter the engineer's name.",
    },
    {
      name: "id",
      type: "input",
      message: "Enter the engeneer's id.",
    },
    {
      name: "email",
      type: "input",
      message: "Enter the engineers's email.",
    },
    {
      name: "github",
      type: "input",
      message: "Enter the employee's github username.",
    },

  ])
  .then(engineerInput => {
    const { name, id, email, github } = engineerInput;
    const engineer = new Engineer(name, id, email, github);

    employeeArray.push(engineer);
    employeeIdArray.push(engineerInput.id);
    creatTeam()
  });
}
  const internInput = () => {

    inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "Enter the intern's name.",
      },
      {
        name: "id",
        type: "input",
        message: "Enter the intern's id.",
      },
      {
        name: "email",
        type: "input",
        message: "Enter the intern's email.",
      },
      {
        name: "school",
        type: "input",
        message: "Enter the interns's school.",
      },

    ])

      .then(internInput => {
        const { name, id, email, school } = internInput;
        const intern = new Intern(name, id, email, school);

        employeeArray.push(intern);
        employeeIdArray.push(internInput.id);
        creatTeam()
      });
  }

function buildTeam() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)

  }
  fs.writeFileSync(outputPath,generateHTML(employeeArray), 'utf-8');
   
   

   }
createManager();
  };
  menu();