const inquirer = require("inquirer")
const Manager = require ('./lib/Manager')
inquirer
  .prompt([
    {
      name: "manager name",
      type: "input",
      message: "What is the managers name?",
    },
    {
        name: "id",
        type: "number",
        message: "What is the managers id?",
      },
      {
        name: "email",
        type: "input",
        message: "What is the managers email?",
      },
      {
        name: "office number",
        type: "input",
        message: "What is the managers office number?",
      },

      
            
])   .then((answer) => {  
    const manager = new Manager (
        answer.managerName,
        answer.id,
        answer.email,
        answer.officeNumber

    )
 });            
