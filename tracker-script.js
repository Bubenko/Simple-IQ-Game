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




function changeValue() {
    document.getElementById("timer").innerHTML = ++value;
}
  
let timerInterval = null;
function startTimer() {
    stopTimer(); // stoping the previous counting (if any)
    value = 0;
    timerInterval = setInterval(changeValue, 1000);  
  }

function stopTimer() {
    clearInterval(timerInterval);
  }





    let hour = 0;
    let minute = 0;
    let seconds = 0;
    let totalSeconds = 0;
    
    let intervalId = null;
    
    function startTimer() {
      ++totalSeconds;
      hour = Math.floor(totalSeconds /3600);
      minute = Math.floor((totalSeconds - hour*3600)/60);
      seconds = totalSeconds - (hour*3600 + minute*60);
  
      document.getElementById("hour").innerHTML =hour;
      document.getElementById("minute").innerHTML =minute;
      document.getElementById("seconds").innerHTML =seconds;
    };
  
    document.getElementById('start-btn').addEventListener('click', function() {
        intervalId = setInterval(startTimer, 1000);
      });
    
    document.getElementById('stop-btn').addEventListener('click', function() {
        if (intervalId)
          clearInterval(intervalId);
      });

      document.getElementById('reset-btn').addEventListener('click', function() {
        totalSeconds = 0;
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("seconds").innerHTML = '0';
     });