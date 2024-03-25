import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const userNum = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);
if (userNum.userGuessNumber === randomNumber) {
    console.log("Congratulations! You guessed right number");
}
else {
    console.log("You guessed wrong number");
}
