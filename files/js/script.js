

// let mySound= new Audio("sound/can.mp3");
// let changes= document.getElementById('nav');

// 		function change() {
// 			mySound.play();
// 			changes.classList.toggle("style");
// 			document.getElementsByTagName("ul")[0].setAttribute("class", "link")
// 		}

//MODAL
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeout = document.querySelector(".closeout");

function toggleModal(){
  modal.classList.toggle("show-modal");
}

function windowOnClick(e){
  if(e.target === modal){
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeout.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);








