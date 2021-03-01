'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
const valueGuess = document.querySelector('.guess').value;
console.log(`este es el valor ${valueGuess}`);
*/

//Obtener un numero random. Math es un objeto de JS y random es uno de los métodos

let score = 20; 
let secretNumber = Math.trunc(Math.random()* 20) + 1;
let highScore = 0;

const initial = {
        score:  document.querySelector('.score').textContent,
        number: document.querySelector('.number').textContent,
        message: document.querySelector('.message').textContent,
        guess: Number(document.querySelector('.guess').value)
};
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
//        document.querySelector('.message').textContent = '👀 No number!';
        displayMessage('👀 No number!');
        document.querySelector('body').style.backgroundColor = '#222';
    } else if(guess === secretNumber){
        displayMessage('✨ Correct number!');
//Siempre que se manipula el css se pone el valor como un string -> ' ... '
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score > highScore){
                highScore  = score;
                document.querySelector('.highscore').textContent = highScore;
        }
    } else if(guess !== secretNumber){
        if(score > 0){
            displayMessage(guess > secretNumber ? '🤦‍♂️ too high' : '🤦‍♂️ too low')
             score--;
             document.querySelector('.score').textContent = score; 
        } else {
            displayMessage('🤔 you lost the game'); 
        } 
        document.querySelector('body').style.backgroundColor = '#222';
    }
});

//implementar reset
document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()* 20) + 1;
    document.querySelector('.score').textContent = initial.score;
    document.querySelector('.number').textContent = initial.number
    displayMessage(initial.message);
    document.querySelector('.guess').value = initial.guess;
    document.querySelector('body').style.backgroundColor = '#222';

});

