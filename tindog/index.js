import dogs from "./data.js";
import Dog from "./Dog.js";

let dogsArray = ["Rex", "Bella", "Teddy"]

const getNewProfile = () => {
  const nextProfileData = dogs[dogsArray.shift()];
  return nextProfileData ? new Dog(nextProfileData) : {};
}

const render = () => {
  document.getElementById("profileContainer").innerHTML = dog.getProfileHtml();
}

function handleClick (){
  dog = getNewProfile();
  render();
}

function like () {
  document.querySelector(".badge").innerHTML = dog.setIsLiked(true);
  setTimeout(handleClick, 2000);
}

function dislike () {
  document.querySelector(".badge").innerHTML = dog.setIsLiked(false);
  setTimeout(handleClick, 2000);
}

const crossBtn = document.getElementById("btnCross");
const heartBtn = document.getElementById("btnHeart");

crossBtn.addEventListener("click", dislike);
heartBtn.addEventListener("click", like);

let dog = getNewProfile();
render();