var auth2;

// Initialize the Google Sign-In API
function initGoogleSignIn() {
  gapi.load("auth2", function () {
    auth2 = gapi.auth2.init({
      client_id:
        "885826283205-63as6j41v9fkfvs089klahmgsp15proo.apps.googleusercontent.com",
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
        // You can now send this information to your server for further processing
      })
      .catch(function (error) {
        // Handle sign-in errors
        if (error.code === "popup_closed_by_user") {
          console.log("Sign-in popup closed by the user.");
        } else {
          console.error("Sign-in error:", error);
        }
      });
  } else {
    console.error("Google API client library not loaded.");
  }
}

// Call the initialization function when the window has finished loading
window.onload = function () {
  initGoogleSignIn();
};
