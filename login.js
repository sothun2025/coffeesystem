document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Simple validation logic
    if (!username || !password) {
      errorMessage.textContent = "Both fields are required.";
    } else if (username !== "admin" || password !== "12345") {
      errorMessage.textContent = "Incorrect username or password.";
    } else {
      // Redirect to index.html if login is successful
      window.location.href = "home.html";
      // Reset the form
      document.getElementById("loginForm").reset();
    }
  });
