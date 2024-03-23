let userName = document.querySelector("#userName");
let userImage = document.querySelector("#userImage");

var auth2;

// Initialize the Google Sign-In API
function initGoogleSignIn() {
  gapi.load("auth2", function () {
    auth2 = gapi.auth2.init({
      client_id:
        "324013198871-dqagmvuf3pqcaqgoi9l75l7kmi325cs9.apps.googleusercontent.com",
      // Specify any additional scopes needed
      scope: "email profile openid",
    });
  });
}

// Function to handle sign-in
function signIn() {
  if (auth2) {
    auth2
      .signIn()
      .then(function (googleUser) {
        // Handle successful sign-in
        var profile = googleUser.getBasicProfile();
        console.log("Name: " + profile.getName());
        console.log("Email: " + profile.getEmail());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("ID: " + profile.getId());
        userName.innerHTML = profile.getName();
        userImage.innerHTML = profile.getImageUrl();
        // Redirect to home.html
        // window.location.href = "home.html";
      })
      .catch(function (error) {
        // Handle sign-in errors
        console.error("Sign-in error:", error);
      });
  } else {
    console.error("Google API client library not loaded.");
  }
}

// Call the initialization function when the window has finished loading
window.onload = function () {
  initGoogleSignIn();
};
