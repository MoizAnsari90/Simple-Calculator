#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer. prompt([
    { message : "hello Sir How Are You" , type : "String" , name : "Sir" },
    { message : "Enter Your First Number", type : "number" , name : "FirstName"},
    { message : "Enter Your Second Number", type : "number" , name : "SecondName"},
    { message : "plz Select Your Operator", type : "list" , name : "operator",
     choices : ["Addition", "subtraction", "multiplication" , "Division"]}
]);

// condition making :

if(answer.operator === "Addition"){
    console.log(answer.FirstName + answer.SecondName);
}
else if(answer.operator === "subtraction"){
    console.log(answer.FirstName - answer.SecondName);
}
else if(answer.operator === "multiplication"){
    console.log(answer.FirstName * answer.SecondName);
}
else if(answer.operator === "Division"){
    console.log(answer.FirstName / answer.SecondName);
}
else{
    console.log("Plz Correct option");
}