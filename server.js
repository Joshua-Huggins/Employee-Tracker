// Need dependencies
const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/database');

async function main() {
    await db.connect();
    console.log(`
    ╔═══╗─────╔╗──────────────╔═╗╔═╗
    ║╔══╝─────║║──────────────║║╚╝║║
    ║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
    ║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
    ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
    ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
    ───────║║──────╔═╝║─────────────────────╔═╝║
    ───────╚╝──────╚══╝─────────────────────╚══╝`)
    
    mainPrompt();
}

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
                case 'View Employees by Department': getDept();
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
                case 'Exit' : endApp();
                break
            }
        }) 
}

// Function to view employees
async function viewEmployee() {
    // Beginning of list
    console.log('List of Employees');

    // TO DO: Add code to display table for current emplyees
    var employee = await db.query(`SELECT * FROM employee;`);
    employee.rows

    for (let employee of employee.rows) { `
    ${employee.id}  ${employee.first_name}  ${employee.last_name}    ${employee.role_id}    ${employee.manager_id}`;
    };
 
    // End of list
    console.log('All Employees Viewed.', employee);

    // Returns user to Main Menu
    mainPrompt();
}

// TO DO: Function to View employees in specific departments
async function getDept() {
    const data = await db.query(`SELECT * FROM department`)
    console.log('Departments', rows.data);

    viewDepartment(data);
}

function viewDepartment(data) {
    inquirer
        .prompt({
            type: 'list',
            name: 'departments',
            message: 'What Department would you like to view',
            // Placeholder
            // Need to link this to data going into mySQL
            // TO DO: Add code to show all current roles as choices
            choices: [rows.data.name]

            // TO DO: Add code to show 
        })
}
// Function to add employees to table
function addEmployee() {
    // Use inquirer prompt to get info from user regarding new employee
    inquirer
        .prompt(
        {
            type: 'input',
            name: 'Name',
            message: 'Enter Employee name',
        },
        {
            type: 'input',
            name: 'Role',
            message: "Enter Employee's new Role",
        },
    )
    .then()

    console.log('Successfuly added employee!')

    // Returns user to Main Menu
    mainPrompt();
}

// Function to remove employees from table
function removeEmployee() {
    console.log('Choose Employee to remove');

    // Return user to main menu
    mainPrompt();
}
// function to Update an employees role
function updateEmployeeRole() {
    console.log('Chose employee role to update');
    // Return user to main menu
    mainPrompt();
}
// function to add a Role
function addRole() {
    console.log('Enter new role.')

    // TO DO: 
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'newRole',
                message: 'What is the new role?',
            },
            {
                type: 'input',
                name: 'newRoleSalary',
                message: 'What is the salary for this new role',
            },
        ])

    // Return user to main menu
    mainPrompt();
}
// TO DO: function to exit application
function endApp() {
    db.end();
    console.log('Quitting App');
}

main();