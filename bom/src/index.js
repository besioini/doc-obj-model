// Create your game here!
let userInput = Number(window.prompt('Guess a number between 1 and 2'))
let randomNum = Math.floor(Math.random() * 2) + 1;
let userInputs= [];

let userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];

if(userInput === randomNum) {
    window.alert(`Good Guess!, It took you ${userAnswers.length + 1} rounds to get the right guess`)
    counter = 0;
}else{
    window.alert(`Bad Guess! Number was ${randomNum}`)
    window.location.reload();
}

// Update the userAnswers and roundCounter in localStorage
localStorage.setItem('userAnswers', JSON.stringify(userAnswers));

// Add the user input to the answers array
userAnswers.push(userInput);

console.log(userAnswers);









