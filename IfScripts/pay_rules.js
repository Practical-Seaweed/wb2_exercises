// helps give better errors related to our code ( for example not using variables that)
"use strict"

// create some variables we need for our calculations

// this is the hourly rate for the employee
let payRate = 17.30;
let hoursWorked = 45;

//determine how many hours are normal hours vs overtime hours
let regularHours = 0;
let overtimeHours = 0;

// if the hours are greater than 40, we know they worked overtime
if(hoursWorked > 40){
    // this is where we need to figure out the overtime hours
    regularHours = 40;
    overtimeHours = hoursWorked - regularHours;
}else{
    // code for folks who didn't work overtime
    regularHours = hoursWorked;

}
// create some variables to represent the normal pay and the overtime pay
let normalPay = payRate * regularHours;
let overtimePay = (payRate * 1.5) * overtimeHours;

//figure out what we got pay after normal and ovetime hours (pay before taxes)
let grossPay = normalPay + overtimePay;

//display the results to the user
console.log("I got paid $" + normalPay.toFixed(2) + " for my regular hours"); 
console.log("I got paid $" + overtimePay.toFixed(2) + " for my overtime hours");
console.log("I got paid $" + grossPay.toFixed(2) + " for my gross pay");

//this exercise is in the Workbook2, page 89