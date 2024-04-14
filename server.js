// Need dependencies
const inquirer = require('inquirer');


// Add port
 
// functions to prompts user about actions (Main menu)
function mainPrompt() {

    // inquirer for (Main Menu)
    inquirer
        .prompt({
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            // Each choice needs there own functions. 
            choices: ['View Employees', 'View Employees by Department', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Add Role', 'Exit']
        })
        // Runs functions based on choices made above
        .then(function ({menu}) {
            
            // Incorperates the functions for the Main Menu choices
            switch (menu) {

                // VIEW EMPLOYEES
                case 'View Employees': viewEmployee();
                break;
                
                // VIEW DEPARTMENTS => VIEW EMPLOYEES IN DEPARTMENT
                case 'View Employees by Department': viewDepartment();
                break;

                // ADD EMPLOYEE
                case 'Add Employee': addEmployee();
                break;

                //REMOVE EMPLOYEE
                case 'Remove Employee': removeEmployee();
                break;

                // UPDATE EMPLOYEE ROLE
                case 'Update Employee Role': updateEmployeeRole();
                break;

                // ADD ROLE
                case 'Add Role': addRole();
                break;

                // EXIT
            }
        }) 
}

// TO DO: Function to view employees
function viewEmployee() {
    // Beginning of list
    console.log('List of Employees');

    // End of list
    console.log('All Employees Viewed.');

    // Returns user to Main Menu
    mainPrompt();
}

// TO DO: Function to View employees in specific departments
function viewDepartment() {
    inquirer
        .prompt({
            type: 'list',
            name: 'departments',
            message: 'What Department would you like to view',
            // Placeholder
            // Need to link this to data going into mySQL
            choices: ['Sales', 'Legal', 'HR']
        })
}
// TO DO: Function to add employees to table
function addEmployee() {
    console.log('Enter Employee name');

    // Returns user to Main Menu
    mainPrompt();
}

// TO DO: Function to remove employees from table
function removeEmployee() {
    console.log('Choose Employee to remove');

    // Return user to main menu
    mainPrompt();
}
// TO DO: function to Update an employees role
function updateEmployeeRole() {
    console.log('Chose employee role to update');
    // Return user to main menu
    mainPrompt();
}
// TO DO: function to add a Role
function addRole() {
    console.log('Enter new role.')

    // Return user to main menu
    mainPrompt();
}
// TO DO: function to exit application


// function to start the inquirer
mainPrompt();