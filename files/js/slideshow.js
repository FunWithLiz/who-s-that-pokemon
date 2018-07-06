//slideshow

var array = ["pikachu.png", "scyther.png", "sandslash.png", "arbok.png", "primeape.png", "mew.png", "rattata.png", "snorlax.png", "weedle.png", "nidorina.png", "mr_mime.png", "rhydon.png", "venosaur.png", "pidgeot.png"];
var arrayName = ['pikachu', 'scyther', 'sandslash', 'arbok', 'primeape', 'mew', 'rattata', 'snorlax', 'weedle', 'nidorina', 'mr. mime', 'rhydon', 'venosaur', 'pidgeot'];
var submit = document.querySelector("#submit");
var input = document.querySelector(".guess");
var slides = document.querySelectorAll(".mySlides");
var reset = document.querySelector('.timer')
let mainPic = document.querySelector('#pic1');
let stop;
let currentSlide = 0;


//progress bar
let progress = document.querySelector('.progressFiller')
let addProgress = 0;
let gameOver = false;


  submit.addEventListener("click", (event) => {
  event.preventDefault();
    if(arrayName[currentSlide] === input.value){
      mainPic.src = "../../images/gen1/color/" + array[currentSlide];
      reset.style.visibility = 'hidden'
      reset.innerText =
      00 + ":" + 00;
      reset.style.visibility = 'visible'
      input.value = document.querySelector(".guess").innerText = '';
    }
  });
  

// //timer countdown
document.querySelector('.timer').innerText =
00 + ":" + 10;
startTimer();

function startTimer() {
  if(currentSlide===13){
    gameOver = true;
  }
  if(gameOver === true){
    clearTimeout(startTimer);
  }

  var presentTime = document.querySelector('.timer').innerText;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
    if(s==59){
      m=m-1
    }
    if(m<0){
      if(gameOver === false){
      currentSlide++;
      
      addProgress = currentSlide * 30;
      progress.style.width = addProgress + 'px';
      
      mainPic.src = "../../images/gen1/black/b_" + array[currentSlide];

    
      
      }
      m = 00;
      s = 10; 
    };


    document.querySelector('.timer').innerText = m + ":" + s;
    if(gameOver === false){setTimeout(startTimer, 1000);
    }
  }
 


function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  
  
  return sec;
}

