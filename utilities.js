function getInputFieldById(id) {
  const elementID = document.getElementById(id).value;
  const numberConvert = parseFloat(elementID);
  return numberConvert;
}

function getTextFieldById(id) {
  const elementID = document.getElementById(id).innerText;
  const numberConvert = parseFloat(elementID);
  return numberConvert;
}

function showSectionById(id) {
  document.getElementById("transaction-history").classList.add("hidden");
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
