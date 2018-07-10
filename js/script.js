//Home Screen modal
const modal = document.querySelector(".modal");
const triggerModal = document.querySelector(".triggerModal");
const closeout = document.querySelector(".closeout");

function toggleModal(){
  modal.classList.toggle("show-modal");
}

function windowOnClick(e){
  if(e.target === modal){
    toggleModal();
  }
}

triggerModal.addEventListener("click", toggleModal);
closeout.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);








