// // cash out form show with click function()
// document.querySelector(".cash-out").addEventListener("click", function () {
//   document.getElementById("add-money-form").classList.add("hidden");
//   document.getElementById("cash-out-form").classList.remove("hidden");
// });
// // add money form show with click function()
// document.querySelector(".add-money").addEventListener("click", function () {
//   document.getElementById("add-money-form").classList.remove("hidden");
//   document.getElementById("cash-out-form").classList.add("hidden");
// });

// // transaction show with click function()
// document.querySelector(".transaction").addEventListener("click", function () {
//   document.getElementById("transaction-history").classList.remove("hidden");
//   document.getElementById("add-money-form").classList.add("hidden");
//   document.getElementById("cash-out-form").classList.add("hidden");
// });

document.querySelector(".add-money").addEventListener("click", function () {
  showSectionById("add-money-form");
});

document.querySelector(".cash-out").addEventListener("click", function () {
  showSectionById("cash-out-form");
});
document.querySelector(".transaction").addEventListener("click", function () {
  showSectionById("transaction-history");
});
