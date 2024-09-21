document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputFieldById("amount");
    const pin = document.getElementById("pin").value;

    if (pin === "1234") {
      const balance = getTextFieldById("main-balance");
      const newBalance = amount + balance;
      document.getElementById("main-balance").innerText = newBalance;
      document.querySelector(
        ".addMoneyTransaction"
      ).innerText = `add $${amount} balance: $${newBalance}`;
    } else if (pin == "1234" && isNaN(amount)) {
      alert("Not a Number");
    } else {
      alert("wrong pin number !");
    }
  });
