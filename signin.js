// // let signinBtn = document.querySelector("#signinBtn");
// // // console.log(signinBtn)

// // signinBtn.addEventListener("click", function () {
// //   let name = document.querySelector("#name");
// //   let email = document.querySelector("#email");
// //   let password = document.querySelector("#password");

// //   let getData = JSON.parse(localStorage.getItem("userDetails"));
// //   console.log(getData);

// //   if (getData.name != name.value) {
// //     Swal.fire({
// //       icon: "error",
// //       title: "Oops...",
// //       text: "user Not Found",
// //       footer: '<a href="#">Why do I have this issue?</a>',
// //     });
// //   } else if (getData.email != email.value) {
// //     Swal.fire({
// //       icon: "error",
// //       title: "Oops...",
// //       text: "user Not Found",
// //       footer: '<a href="#">Why do I have this issue?</a>',
// //     });
// //   } else if (getData.password != password.value) {
// //     Swal.fire({
// //       icon: "error",
// //       title: "Oops...",
// //       text: "user Not Found",
// //       footer: '<a href="#">Why do I have this issue?</a>',
// //     });
// //   } else if (
// //     getData.name == name.value &&
// //     getData.email == email.value &&
// //     getData.password == password.value
// //   ) {
// //     setTimeout(() => {
// //       Swal.fire({
// //         title: "User Found!",
// //         text: "You are sucessfully signin",
// //         icon: "success",
// //       });
// //       // window.location.href = "./home.html";
// //     }, 200);
// //   }
// // });

// let signinBtn = document.querySelector("#signinBtn");

// signinBtn.addEventListener("click", function () {
//   let name = document.querySelector("#name");
//   let email = document.querySelector("#email");
//   let password = document.querySelector("#password");

//   let getData = JSON.parse(localStorage.getItem("userDetails"));
//   console.log(getData);

//   if (
//     getData.name != name.value ||
//     getData.email != email.value ||
//     getData.password != password.value
//   ) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "User Not Found",
//       footer: '<a href="#">Why do I have this issue?</a>',
//     });
//   } else {
//     setTimeout(() => {
//       Swal.fire({
//         title: "User Found!",
//         text: "You are successfully signed in",
//         icon: "success",
//       });
//       window.location.href = "./home.html"; // Navigate to home.html when all conditions are fulfilled
//     }, 200);
//   }
// });

let signinBtn = document.querySelector("#signinBtn");

signinBtn.addEventListener("click", function () {
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  let getData = JSON.parse(localStorage.getItem("userDetails"));
  console.log(getData);

  if (
    getData.name != name.value ||
    getData.email != email.value ||
    getData.password != password.value
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User Not Found",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else {
    setTimeout(() => {
      Swal.fire({
        title: "User Found!",
        text: "You are successfully signed in",
        icon: "success",
      }).then(() => {
        window.location.href = "./home.html"; // Navigate to home.html after 2 seconds
      });
    }, 0); // 2 seconds delay
  }
});
