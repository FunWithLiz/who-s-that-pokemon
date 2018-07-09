//progress bar
let progress = document.querySelector('.progressFiller')
let addProgress = 0;
let gameOver = false;
let whichGen;
var kanto = document.querySelector(".firstContainer");



function toggleFirst() {
  whichGen = 1;
  location.reload();
  addProgress = 0;
  progress.style.width = addProgress + 'px';
  //timer countdown
  // document.querySelector('.timer').innerText =
  // 00 + ":" + 10;
  // location.reload();
  // startTimer1();
  
}

var reset = document.querySelector('.timer');

function toggleSecond() {
  whichGen = 2;
  addProgress = 0;
  progress.style.width = addProgress + 'px';
  reset = document.querySelector(".secondContainer > div");
  // console.log(reset);
  var johto = document.querySelector(".secondContainer");
  kanto.style.visibility = "hidden";
  johto.style.visibility = "visible";
  
  reset.innerText =
  00 + ":" + 10;
  startTimer2();
  
  
}

//slideshow

var array = ["pikachu.png", "scyther.png", "sandslash.png", "arbok.png", "primeape.png", "mew.png", "rattata.png", "snorlax.png", "weedle.png", "nidorina.png", "mr_mime.png", "rhydon.png", "venosaur.png", "pidgeot.png"];
var arrayName = ['pikachu', 'scyther', 'sandslash', 'arbok', 'primeape', 'mew', 'rattata', 'snorlax', 'weedle', 'nidorina', 'mr. mime', 'rhydon', 'venosaur', 'pidgeot'];

var array2 = ["slowking.png", "togepi.png", "hoppip.png", "crobat.png", "delibird.png", "pineco.png", "smeargle.png", "hoothoot.png", "teddiursa.png", "steelix.png", "houndoom.png", "mareep.png", "shuckle.png", "celebi.png"];
var arrayName2 = ['slowking', 'togepi', 'hoppip', 'crobat', 'delibird', 'pineco', 'smeargle', 'hoothoot', 'teddiursa', 'steelix', 'houndoom', 'mareep', 'shuckle', 'celebi'];

var submit = document.querySelector(".enter");
var submit2 = document.querySelector(".enter2");

var input = document.querySelector(".guess");
var input2 = document.querySelector(".guess2");
var slides = document.querySelectorAll(".mySlides");
let mainPic = document.querySelector('#kanto');
let mainPic2 = document.querySelector('#johto');
let stop;
let currentSlide = 0;

let scoreBoard = document.querySelector('.score');
let score = 0;



submit.addEventListener("click", (event) => {
  event.preventDefault();
  if(arrayName[currentSlide] === input.value){
    mainPic.src = "../../images/gen1/color/" + array[currentSlide];
    
    score+=10;
    scoreBoard.innerHTML = score;
    
    document.querySelector('.timer').style.visibility = 'hidden'
    
    // document.querySelector('.timer').innerText =
      // 00 + ":" + 00;
      setTimeout(() => {document.querySelector('.timer').innerText =
      00 + ":" + 00;}, 2000);
      document.querySelector('.timer').style.visibility = 'visible'
      input.value = document.querySelector(".guess").innerText = '';
    }
  });
  

  submit2.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('.timer').style.visibility = 'hidden'
      if(arrayName2[currentSlide] === input2.value){
        mainPic2.src = "../../images/gen2/color/" + array2[currentSlide];
  

        score+=10;
        scoreBoard.innerHTML = score;
        // reset.style.visibility = 'hidden'
        // reset.innerText =
        // 00 + ":" + 00;

        setTimeout(() => {document.querySelector('.secondContainer > div').innerText =
      00 + ":" + 00;}, 2000);
        reset.style.visibility = 'visible'
        input2.value = document.querySelector(".guess2").innerText = '';
      }
    });


// //timer countdown
document.querySelector('.timer').innerText =
00 + ":" + 10;
startTimer1();

let end = document.querySelector(".modal1");
let end2 = document.querySelector(".modal2");
let end3 = document.querySelector(".modal3");

function checkEnd1(){
  if(score <= 40){
    end.style.opacity = 1;
    end.style.visibility = "visible";
  } else if(score <= 100){
    end2.style.opacity = 1;
    end2.style.visibility = "visible";
  } else if(score === 140){
    end3.style.opacity = 1;
    end3.style.visibility = "visible";
  }
}

function checkEnd2(){
  if(score <= 40){
    end.style.opacity = 1;
    end.style.visibility = "visible";
  } else if(score <= 100){
    end2.style.opacity = 1;
    end2.style.visibility = "visible";
  } else if(score === 140){
    end3.style.opacity = 1;
    end3.style.visibility = "visible";
  }
}

function startTimer1() {
  if(currentSlide===13){
    gameOver = true;
  }
  if(gameOver === true){
      clearTimeout(startTimer1);
      setTimeout(checkEnd1,1500)
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
  
    if(gameOver === false){setTimeout(startTimer1, 1000);
    }
  }
 

  function startTimer2() {
    if(currentSlide===13){
      gameOver = true;
    }
    if(gameOver === true){
      clearTimeout(startTimer2);
      setTimeout(checkEnd2,1500);
    }
    
    var presentTime = document.querySelector('.secondContainer > div').innerText;
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
      
        mainPic2.src = "../../images/gen2/black/b_" + array2[currentSlide];
        
  
      }
        m = 00;
        s = 10; 
      };
  

      document.querySelector('.secondContainer > div').innerText = m + ":" + s;
    
      if(gameOver === false){setTimeout(startTimer2, 1000);
      }
    }
   




function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  
  
  return sec;
}

