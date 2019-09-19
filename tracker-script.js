const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const SQUARE = document.querySelector('.square');
const FINISH = document.querySelector('.finish');
const BODY = document.querySelector('body');
const BTN = document.querySelector('.btn');
const BTNSTART = document.querySelector('.btnStart');
const DIVSTART = document.querySelector('.start');

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let elementIsClicked = false; 

function fireUP(){
  elementIsClicked = true;
  DIVSTART.style.visibility = "hidden";
  AREA.style.backgroundColor = "white";

  AREA.addEventListener('mousemove', mouseCoordinates, false);
  CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);
  SQUARE.addEventListener('mouseenter', changeSqColorOnTouch, false);
  CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
  SQUARE.addEventListener('mouseleave', function(){SQUARE.removeAttribute("style");}, false);
}

BTNSTART.addEventListener('click', fireUP);


function mouseCoordinates(e) {
    let horizontalPosition = windowWidth - e.clientX - 26;
    let verticalPosition= windowHeight - e.clientY - 26;

    let sqHrPosition = windowWidth - e.clientY - 26;
    let sqVrPosition = windowHeight - e.clientX - 26;

    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';

    SQUARE.style.left = sqHrPosition + 'px';
    SQUARE.style.top = sqVrPosition + 'px';

    if(SQUARE.offsetLeft == CIRCLE.offsetLeft && SQUARE.offsetTop == CIRCLE.offsetTop){
        CIRCLE.style.visibility = "hidden";
        SQUARE.style.visibility = "hidden";
        FINISH.style.visibility = "visible";
        BODY.style.backgroundColor = "red";
        pauseTimer();

    };

}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";

}

function changeSqColorOnTouch() {
    SQUARE.style.backgroundColor = "green";
    SQUARE.style.borderColor = "green";

}


let timerResult = document.querySelector('.timerContainer');     
let timerDisplay = document.querySelector('.timer');
let finalTime = document.querySelector('.finalTime');
let totalTime = document.querySelector('.finalTime');

     let startTime;
     let updatedTime;
     let difference;
     let tInterval;
     let savedTime;
     let paused = 0;
     let running = 0;
     
     function startTimer(){
       if(!running){
         startTime = new Date().getTime();
         tInterval = setInterval(getShowTime, 1);
      
         paused = 0;
         running = 1;
       }
     }

     function pauseTimer(){
      if (!difference){
        // if timer never started, don't allow pause button to do anything
      } else if (!paused) {
        clearInterval(tInterval);
        savedTime = difference;
        paused = 1;
        running = 0;
      
      } else {// if the timer was already paused, when they click pause again, start the timer againstartTimer();
      }
    }
     
     
     function getShowTime(){
       updatedTime = new Date().getTime();
       if (savedTime){
         difference = (updatedTime - startTime) + savedTime;
       } else {
         difference =  updatedTime - startTime;
       }
       // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
       var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((difference % (1000 * 60)) / 1000);
       var milliseconds = Math.floor((difference % (10 * 60)) / 1);
       hours = (hours < 10) ? "0" + hours : hours;
       minutes = (minutes < 10) ? "0" + minutes : minutes;
       seconds = (seconds < 10) ? "0" + seconds : seconds;
       milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
       timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
       totalTime.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
     }