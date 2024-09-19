document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // Get the phone number
    const number = document.getElementById("number").value;
    // Get the pin
    const pin = document.getElementById("pin").value;

    if (number === "01985924762" && pin === "1234") {
      window.location.href = "/home.html";
    } else {
      document.getElementById("error-message").classList.remove("hidden");
    }
  });
