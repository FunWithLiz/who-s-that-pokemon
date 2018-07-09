const modal1 = document.querySelectorAll(".modal1");
const modal2 = document.querySelectorAll(".modal2");
const modal3 = document.querySelectorAll(".modal3");

const closeout = document.querySelector(".closeout");

function toggleModal1(){
  // console.log("this is modal1:", modal1);
  modal1[0].classList.toggle("show-modal");
}

function toggleModal2(){
  modal2[0].classList.toggle("show-modal");
}

function toggleModal3(){
  modal3[0].classList.toggle("show-modal");
}

function windowOnClick1(e1){
  if(e1.target === modal1){
    toggleModal1();
  }
}

function windowOnClick2(e2){
  if(e2.target === modal2){
    toggleModal2();
  }
}

function windowOnClick3(e3){
  if(e3.target === modal3){
    toggleModal3();
  }
}


closeout.addEventListener("click", toggleModal1);
window.addEventListener("click", windowOnClick1);

closeout.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);

closeout.addEventListener("click", toggleModal3);
window.addEventListener("click", windowOnClick3);