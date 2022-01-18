const generateHTML = require('./src/generateHTML')


const fs = require('fs');
const inquirer = require("inquirer");


const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const employeeArray = [];

const addManager = () => {
  return inquirer.prompt([

    {
      name: "manager name",
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
      name: "office number",
      type: "input",
      message: "Enter managers office number.",
    },



  ]).then(managerInput => {
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager(name, id, email, officeNumber);

    employeeArray.push(manager);
  })

}; 

const addEmployee = () => {
  console.log(`
  `);

  return inquirer.prompt([
    {
      name: "role",
      type: "list",
      message: "Choose your employee's role.",
      choices: ['Engineer', 'Intern']
    },
    {
      name: "name",
      type: "input",
      message: "Enter the employee's name.",
    },
    {
      name: "id",
      type: "input",
      message: "Enter the employee's id.",
    },
    {
      name: "email",
      type: "input",
      message: "Enter the employee's email.",
    },
    {
      name: "github",
      type: "input",
      message: "Enter the employee's github username.",
    },
    {
      name: "school",
      type: "input",
      message: "Enter the interns's school.",
    },
    {
      name: "confirmAddEmployee",
      type: "confirm",
      message: "Do you wish to add more employees?",
    },
  ])
  .then(employeeData => {

    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
    let employee; 

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

        console.log(employee);

    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }

    employeeArray.push(employee); 

    if (confirmAddEmployee) {
        return addEmployee(employeeArray); 
    } else {
        return employeeArray;
    }
})

};
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {

      if (err) {
          console.log(err);
          return;
      
      } else {
          console.log("Your team profile has been successfully created! Please check out the index.html")
      }
  })
}; 

addManager()
.then(addEmployee)
.then(employeeArray => {
  return generateHTML(employeeArray);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});


