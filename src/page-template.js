const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");


const employeeCards = employeeArray => {
return `
${employeeArray
.filter(employee => employee instanceof Manager)
.map((employee) => {
    return`
<div class="col-3 border border-2 border-dark rounded-3 px-0 shadow my-4 mx-2">
    <div class="bg-secondary bg-gradient text-white fw-bold p-2">
        <h3>${employee.name}</h3>
        <h4>Manager</h4>
    </div>
<ul class="list-group py-4 px-2 bg-secondary bg-opacity-10">    
        <li class="list-group-item rounded my-2 shadow-sm">ID: ${employee.id}</li>
        <a class="list-group-item rounded my-2 shadow-sm" href="mailto:${employee.email}">Email: ${employee.email}</a>
        <li class="list-group-item rounded my-2 shadow-sm">Office: ${employee.officeNumber}</li>
    </ul>
</div>
`;
})
.join('')}
${employeeArray
    .filter(employee => employee instanceof Engineer)
    .map((employee) => {
        return`
    <div class="col-3 border border-2 border-dark rounded-3 px-0 shadow my-4 mx-2">
        <div class="bg-secondary bg-gradient text-white fw-bold p-2">
            <h3>${employee.name}</h3>
            <h4>Engineer</h4>
        </div>
    <ul class="list-group py-4 px-2 bg-secondary bg-opacity-10">    
            <li class="list-group-item rounded my-2 shadow-sm">ID: ${employee.id}</li>
            <a class="list-group-item rounded my-2 shadow-sm" href="mailto:${employee.email}">Email: ${employee.email}</a>
            <a class="list-group-item rounded my-2 shadow-sm" href="https://github.com/${employee.github}" target="_blank">GitHub: https://github.com/${employee.github}</a>
        </ul>
    </div>
    `;
    })
    .join('')}
${employeeArray
    .filter(employee => employee instanceof Intern)
    .map((employee) => {
        return`
    <div class="col-3 border border-2 border-dark rounded-3 px-0 shadow my-4 mx-2">
        <div class="bg-secondary bg-gradient text-white fw-bold p-2">
            <h3>${employee.name}</h3>
            <h4>Intern</h4>
        </div>
    <ul class="list-group py-4 px-2 bg-secondary bg-opacity-10">    
            <li class="list-group-item rounded my-2 shadow-sm">ID: ${employee.id}</li>
            <a class="list-group-item rounded my-2 shadow-sm" href="mailto:${employee.email}">Email: ${employee.email}</a>
            <li class="list-group-item rounded my-2 shadow-sm">School: ${employee.school}</li>
        </ul>
    </div>
    `;
    })
    .join('')}
    `
};


const generatePage = employeeArray => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>My Team Display</title>
    </head>
    <body class="min-vh-100">
        <div class="w-100 bg-success bg-gradient text-white align-items-center d-flex" style="height: 100px">
            <h1 class="mx-auto fs-1 fw-bold">
                My Team
            </h1>
        </div>
        <div class="container my-5 w-100">
                <div class="row justify-content-around w-100">
                ${employeeCards(employeeArray)}
                </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `};

    module.exports = generatePage
