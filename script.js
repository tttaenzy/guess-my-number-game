'use strict';


let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector(".check").addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);

        if (!guess) {
            //When there is no number 
            document.querySelector('.message').textContent = "No number Entered";
        } else if (guess === randomNumber) {
            //When you guess correct number
            document.querySelector('.message').textContent = "corrent answer";
            document.querySelector('.number').textContent = randomNumber;
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '30rem';

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else if (guess !== randomNumber) {
            if (score > 1) {
                //when your guess number is too high
                document.querySelector('.message').textContent =
                    guess > randomNumber ? "Too high" : "Too low";
                score--;
                document.querySelector(".score").textContent = score;

            } else {
                document.querySelector('.message').textContent = "YOU LOSt";
            }

        }
    });

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing......';



})