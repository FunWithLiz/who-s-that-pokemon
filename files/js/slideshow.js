//slideshow

var array = ["pikachu.png", "scyther.png", "sandslash.png", "arbok.png", "primeape.png", "mew.png", "rattata.png", "snorlax.png", "weedle.png", "nidorina.png", "mr_mime.png", "rhydon.png", "venosaur.png", "pidgeot.png"];
var arrayName = ['pikachu', 'scyther', 'sandslash', 'arbok', 'primeape', 'mew', 'rattata', 'snorlax', 'weedle', 'nidorina', 'mr. mime', 'rhydon', 'venosaur', 'pidgeot'];

var submit = document.querySelector("#submit");
var input = document.querySelector(".guess");

var slides = document.querySelectorAll(".mySlides");

let mainPic = document.querySelector('#pic1');
let stop;
let currentSlide = 0;


submit.addEventListener("click", (event) => {
  event.preventDefault();
    for(let i=0; i<=array.length; i++){
  if(arrayName[currentSlide] === input.value){
    mainPic.src = "../../images/gen1/color/" + array[currentSlide];
    currentSlide++;
    input.value = document.querySelector(".guess").innerText = '';
    }   
    
       stop = setTimeout(()=>{
           mainPic.src = "../../images/gen1/black/b_" + array[currentSlide];
        }, 3000);
      }
});







// //timer countdown
document.querySelector('.timer').innerText =
  00 + ":" + 10;
startTimer();

function startTimer() {
  var presentTime = document.querySelector('.timer').innerText;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));

    if(s==59){
      m=m-1
    }
    if(m<0 ){
      currentSlide++;
      mainPic.src = "../../images/gen1/black/b_" + array[currentSlide];
      m = 00;
      s = 10; 
      // }
};
  
  
  document.querySelector('.timer').innerText = m + ":" + s;
  setTimeout(startTimer, 1000);
}


function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};


  return sec;
}

