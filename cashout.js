document.getElementById("cash-out").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = document.getElementById("cashout-amount").value;
  const pin = document.getElementById("cashout-pin").value;
  const mainbalance = document.getElementById("balance").innerText;

  if (pin === "1234" && amount <= mainbalance) {
    const balance = document.getElementById("balance").innerText;
    const ammountNumber = parseFloat(amount);
    const balanceNumber = parseFloat(balance);
    document.getElementById("balance").innerText =
      balanceNumber - ammountNumber;
  } else if (amount > mainbalance || amount < 0) {
    alert("Wrong Balance !");
  } else if (pin !== "1234") {
    alert("Something Wrong !");
  } else {
    alert("something wrong");
  }
});
