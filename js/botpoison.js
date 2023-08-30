var formElement = document.getElementById("form");
var buttonElement = document.getElementById("button");
var loadingIndicator = document.getElementById("loading-indicator");
var submit = document.getElementById("submit")


formElement.addEventListener("botpoison-challenge-start", function () {
  buttonElement.setAttribute("disabled", "disabled");
  loadingIndicator.classList.remove("hidden");
  submit.classList.add("hidden");
});

formElement.addEventListener("botpoison-challenge-success", function () {
  buttonElement.removeAttribute("disabled");
  loadingIndicator.classList.add("hidden");
});

formElement.addEventListener("botpoison-challenge-error", function () {
  buttonElement.removeAttribute("disabled");
  loadingIndicator.classList.add("hidden");
});