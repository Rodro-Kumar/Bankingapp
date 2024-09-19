document.getElementById("cash-out").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = document.getElementById("cashout-amount").value;
  console.log(amount);

  const pin = document.getElementById("cashout-pin").value;
  const balance = document.getElementById("main-balance").innerText;
  console.log(balance);

  if (pin === "1234" && amount <= balance) {
    const ammountNumber = parseFloat(amount);
    const balanceNumber = parseFloat(balance);
    document.getElementById("main-balance").innerText =
      balanceNumber - ammountNumber;
  } else if (pin !== "1234") {
    alert("Something Wrong !");
  } else {
    alert("wrong amount !");
  }
});
