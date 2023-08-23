document.addEventListener("DOMContentLoaded", function () {
    // Code to execute once the DOM is fully loaded
  
    // Add event listener for the login button
    var loginButton = document.querySelector(".login button");
    if (loginButton) {
      loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission
  
        var emailInput = document.querySelector(".login input[name='email']");
        var passwordInput = document.querySelector(".login input[name='pswd']");
  
        // Check if the provided email and password match the allowed combination
        if (
          emailInput.value === "Test@gmail.com" &&
          passwordInput.value === "Nevergonnagiveyouup"
        ) {
          // Redirect to the booking page
          window.location.href = "./booking.html";
        } else {
          alert("Invalid email or password. Please try again.");
        }
      });
    }
  });
  