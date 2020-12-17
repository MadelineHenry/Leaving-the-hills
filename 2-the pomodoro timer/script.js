/*créer des varriable pour chaque élément du html */


const bPomodoro = document.querySelector(".buttons_Pom");
const bShortB = document.querySelector(".buttons_shortB");
const bLongB = document.querySelector(".buttons_longB");

const refresh = document.querySelector(".fas fa-redo");
const play = document.querySelector(".far fa-play-circle");
const pause = document.querySelector(".far fa-pause-circle");

/* */

let minutes = 25;
let seconds = "00";

let click = new Audio("click.mp3");
let bell = nex Audio("bell.mp3");

function template(){
    document.getElementById("Min").innerHTML = minutes;
    document.getElementById("Sec").innerHTML = seconds;
}

function start(){
    click.play();

    minutes = 24;
    secondes = 59;

    document.getElementById("Min").innerHTML = minutes;
    document.getElementById("Sec").innerHTML = seconds;

    let minutes_interval = setInterval(minutesTimer, 60000);
    let seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer(){
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;
    }
    function secondsTimer(){
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;
        
        if(seconds <= 0){
            if(minutes <= 0){
                clearInterval(minutes_interval);
                clearInterval(seconds_intervals);

                document.getElementById("done").classList("show-message");
            }
            seconds = 60;
        }
    }
}


// let sec = 120;
// let min = Math.floor((sec/60));
// let displaySec = sec%60;

// function displayTime(){
//     if (displaySec < 10){
//         timer.textContent = `${min}:0${displaySec}`;
//         if (min < 10 && displaySec < 10){
//             timer.textContent = `0${min}:0${displaySec}`;
//         }
//     }
//     else if (min < 10){
//         timer.textContent = `0${min}:${displaySec}`;
//         if (min < 10 && displaySec < 10){
//             timer.textContent = `0${min}:0${displaySec}`;
//         }
//     }
//     else{
//         timer.textContent = `${min}:${displaySec}`;
//     }
// }

// displayTime()

// function startTimer() {
//     min = Math.floor((sec/60));
//     displaySec = sec%60;
//     sec--;
//     displayTime();
//     if (sec < 0){
//         stopTimer();
//     }
// }

// let interval;

// function stopTimer(){
//     clearInterval(interval)
// }

// let playClicked = true;

// play.addEventListener('click', () =>{
//     if (playClicked == true){
//         playClicked = false;
//         interval = setInterval(startTimer, 250);
//         startTimer()
//     }
// })

// stopBtn.addEventListener('click', () =>{
//     if (playClicked == false){
//         playClicked = true;
//         stopTimer();
//     }
// })