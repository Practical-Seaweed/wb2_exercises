"use strict"

// create a variable to hold the department name
let departmentName = "";

switch(37){
    case 1:
        departmentName = "Marketing";
        break;
    case 5:
        departmentName = "Human Resources";
        break;
    case 10:
        departmentName = "Accounting";
        break;
    case 12:
        departmentName = "Legal";
        break;
    case 18:
        departmentName = "IT";
        break;
    case 20:
        departmentName = "Customer Relations";
        break;
    default:
        departmentName = "We have no idea what department you are looking for";
}

// output information to the console
console.log(`The department is: ${departmentName}`);