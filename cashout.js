document.getElementById("cash-out").addEventListener("click", function (event) {
  event.preventDefault();
  const pin = document.getElementById("cashout-pin").value;
  const balance = getTextFieldById("main-balance");
  const cashOutAmount = getInputFieldById("cashout-amount");
  if (pin === "1234" && cashOutAmount <= balance) {
    const updateBalance = balance - cashOutAmount;
    document.getElementById("main-balance").innerText = updateBalance;
    document.querySelector(
      ".cashoutTransaction"
    ).innerHTML = `cash out $${cashOutAmount} Balance: $${updateBalance}`;
  } else if (pin !== "1234") {
    alert("Wrong pin number!");
  } else {
    alert("wrong amount !");
  }
});
