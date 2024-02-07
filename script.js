let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const generateCompChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    let index = Math.trunc(Math.random() * 3);
    return options[index];
}

const playGame = (userChoice, compChoice) => {
    if ((userChoice === "rock" && compChoice === "paper") || (userChoice === "scissors" && compChoice === "rock") || (userChoice === "paper" && compChoice === "scissors")) {
        comp.innerText = ++compScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `Comp Won! ${compChoice} beats your ${userChoice}`
    } else if ((userChoice === "paper" && compChoice === "rock") || (userChoice === "rock" && compChoice === "scissors") || (userChoice === "scissors" && compChoice === "paper")) {
        user.innerText = ++userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`
    } else {
        msg.style.backgroundColor = "#081b31";
        msg.innerText = `It's a Draw! You: ${userChoice}, Comp: ${compChoice}`
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");
        let compChoice = generateCompChoice();

        playGame(userChoice, compChoice);
    });
});