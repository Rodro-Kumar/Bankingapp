document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const pin = document.getElementById("pin").value;

    if (pin === "1234") {
      const balance = document.getElementById("balance").innerText;
      const amountNumber = parseFloat(amount);
      const balanceNumber = parseFloat(balance);
      document.getElementById("balance").innerText =
        balanceNumber + amountNumber;
    } else {
      alert("Something Wrong !");
    }
  });
