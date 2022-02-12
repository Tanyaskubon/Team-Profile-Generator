




const generateTeam = team => {
    const generateManager = manager => {
        return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <p class="card-text">${manager.getId()}</p>
    <p class="card-text">${manager.getEmail()}</p>
    <p class="card-text">${manager.getRole()}</p>
    <p class="card-text">${manager.getOfficeNumber()}</p>
    
  </div>
</div>
        `
    }
    const generateEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.getName()}</h5>
    <p class="card-text">${engineer.getId()}</p>
    <p class="card-text">${engineer.getEmail()}</p>
    <p class="card-text">${engineer.getRole()}</p>
    <p class="card-text">${engineer.getGithub()}</p>
    
  </div>
</div>
        `
    }
    const generateIntern = intern => {
        return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.getName()}</h5>
    <p class="card-text">${intern.getId()}</p>
    <p class="card-text">${intern.getEmail()}</p>
    <p class="card-text">${intern.getRole()}</p>
    <p class="card-text">${intern.getSchool()}</p>
    
  </div>
</div>
        `
    }
    const html = [];
    html.push(team
        .filter(employee => employee.getRole()=== 'Manager')
        .map(manager => generateManager(manager)))

        html.push(team
            .filter(employee => employee.getRole()=== 'Engineer')
            .map(engineer => generateEngineer(engineer))
            .join(''))


            html.push(team
                .filter(employee => employee.getRole()=== 'Intern')
                .map(intern => generateIntern(intern))
                .join(''))
                
                return html.join('');
        
    

}





module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team-Profile-Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>My Team</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
    
    
</body>
</html>
    `
}