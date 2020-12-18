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
let bell = new Audio("bell.mp3");

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