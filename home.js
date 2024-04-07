let userLoginName = document.querySelector("#userLoginName");
let userImage = document.querySelector("#userImage");
let userWelcome = document.querySelector("#userWelcome");

let getData = JSON.parse(localStorage.getItem("userDetails"));
console.log(getData.name);
userLoginName.innerHTML = getData.name;
userImage.src = getData.image;
userWelcome.innerHTML += getData.name + "👋";
