#!/user/bin/env node

import inquirer from"inquirer";
const randomNumber = Math.floor(Math.random()* 6 + 1)
const answer = await inquirer.prompt([{
    name : "userGuessedNumber",
    type : "number",
    message : "please guess the number between 1/6!",
}
    
]);
if(answer.userGuessedNumber == randomNumber){
    console.log("congretulations!you guessed tha right number");
}else{
    console.log(" you guess tha wrong number");
};



