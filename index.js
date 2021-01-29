
let arr=document.querySelectorAll(".drum");

function checkLetter (char){
  switch (char){
    case 'w':
      let crash= new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    case "s":
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "d":
      let kick= new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "j":
      let snare= new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      let tom3= new Audio ("sounds/tom-3.mp3")
      tom3.play();

    case 'l':
      let tom4 = new Audio ("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(this.textContent);
  }
}


for (let i=0;i<arr.length;i++){
  arr[i].addEventListener("click", function (){
    checkLetter(this.textContent);
    animateButton(this.textContent);
  })
}

document.addEventListener("keydown", function (e){
  checkLetter(e.key);
  animateButton(e.key);
})

function animateButton (char){
  document.querySelector("."+char).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+char).classList.remove("pressed");
  },100);
}
