"use script"

// create a variable for the current hour and greeting
let currentHour = 20;
let greeting = "";

// create an if/else statement to figure out out greeting
// before 10am: good morning; after 10am but before 5: good day, after 5: good evening

if(currentHour <= 10){
    greeting = "Good morning!"
}
else if( currentHour < 17){
    greeting = "Good day!"
}else{
    greeting = "Good evening!"
}


// display the results in the console
console.log(greeting)

// this exercise is in Workbook2 pdf file, page 92