"use strict"






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

let annualGrossPay = grossPay * 52;

// let filingSingle = "false";
let taxFileType = "joint";
let taxRate = 0;

if (taxFileType === "joint"){
    // we are filing a joint return
    if(annualGrossPay < 1200){
    taxRate = 0;
    }
    else if (annualGrossPay < 25000){
        taxRate = 6;
    }
    else if (annualGrossPay < 75000){
        taxRate = 11;
    }
    else {
        taxRate = 20;
    }



}else {
    // filing a single return

    if(annualGrossPay < 12000){
        taxRate = 5;
    }
    else if(annualGrossPay < 25000){
        taxRate = 10;
    }
    else if(annualGrossPay < 75000){
        taxRate = 15;
    }
    else {
        taxRate = 20;
    
    }

}

let taxAmount = grossPay * (taxRate/100);
let netPay = grossPay - taxAmount;   // netPay is the afterTax

//display the results to the user
console.log(`You worked ${hoursWorked} hours this period.`); 
console.log(`Because you earn $${payRate.toFixed(2)} per hour, your gross pay is $${grossPay}`);
console.log(`Your filing status is ${taxFileType}`);
console.log(`Your tax withholdings this perios is $${taxAmount.toFixed(2)}`);
console.log(`Your net pay is $${netPay.toFixed(2)} `)