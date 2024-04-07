// let name = document.querySelector("#name");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let rePassword = document.querySelector("#re-password");
// let image = document.querySelector("#image");
// let signup = document.querySelector("#signup");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let rePassword = document.querySelector("#re-password");
let image = document.querySelector("#image");

let passwordMatch = document.querySelector("#passwordMatch ");
signup.addEventListener("click", () => {
  // let signup = document.querySelector("#signup");

  let myForm = document.querySelector("#myForm form ");

  let userDetails = {
    name: name.value,
    email: email.value,
    password: password.value,
    rePassword: rePassword.value,
    image: image.value,
  };

  if (name.value === "") {
    // alert("pls enter a name")
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Missing name filed",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else if (email.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Missing email filed",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else if (password.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Missing password filed",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else if (rePassword.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Missing re-password filed",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else if (image.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Missing image filed",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else {
    Swal.fire({
      title: "Good job!",
      text: "You are sucessfully signup",
      icon: "success",
    });
    // myFrom.reset()
    // console.log(userDetails);
    let sendData = JSON.stringify(userDetails);
    localStorage.setItem("userDetails", sendData);
    // console.log(userDetails);
    // console.log(sendData);
  }
});

function myFunction() {
  let checkPassword = password.value;
  let checkRepassword = rePassword.value;
  if (checkPassword !== checkRepassword) {
    passwordMatch.textContent = "Passwords must be same";
    passwordMatch.style.color = "red";
  } else {
    passwordMatch.textContent = "Passwords match.";
    passwordMatch.style.color = "green";
    myForm.reset();
    window.location.href = "./signin.html";
  }

  console.log(checkPassword);
  console.log(checkRepassword);
}
// myFunction();
