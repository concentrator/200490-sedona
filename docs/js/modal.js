var failure = document.querySelector(".modal--failure");
var success = document.querySelector(".modal--success");
var form = document.querySelector(".form");
var closeFailure = failure.querySelector(".modal__close");
var closeSuccess = success.querySelector(".modal__close");
var firstname = form.querySelector("input[name=name]");
var surname = form.querySelector("[name=surname]");
var tel = form.querySelector("[name=tel]");
var email = form.querySelector("[name=email]");


if (localStorage.getItem("firstname")) {
  firstname.value = localStorage.getItem("firstname");
}
if (localStorage.getItem("surname")) {
  surname.value = localStorage.getItem("surname");
}
if (localStorage.getItem("tel")) {
  tel.value = localStorage.getItem("tel");
}
if (localStorage.getItem("email")) {
  email.value = localStorage.getItem("email");
}

closeFailure.addEventListener("click", function (evt) {
  evt.preventDefault();
  failure.classList.remove("modal--show");
});

closeSuccess.addEventListener("click", function (evt) {
  evt.preventDefault();
  success.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (failure.classList.contains("modal--show")) {
      failure.classList.remove("modal--show");
    }
    if (success.classList.contains("modal--show")) {
      success.classList.remove("modal--show");
    }
  }
});

form.addEventListener("submit", function (evt) {
    if (!firstname.value || !surname.value || !tel.value || !email.value) {
      evt.preventDefault();
      failure.classList.add("modal--show");

      if (!firstname.value) {
        firstname.classList.add("input--invalid");
      } else {
        firstname.classList.remove("input--invalid");
        localStorage.setItem("firstname", firstname.value);
      }
      if (!surname.value) {
        surname.classList.add("input--invalid");
      } else {
        surname.classList.remove("input--invalid");
        localStorage.setItem("surname", surname.value);
      }
      if (!tel.value) {
        tel.classList.add("input--invalid");
      } else {
        tel.classList.remove("input--invalid");
        localStorage.setItem("tel", tel.value);
      }
      if (!email.value) {
        email.classList.add("input--invalid");
      } else {
        email.classList.remove("input--invalid");
        localStorage.setItem("email", email.value);
      }
    } else {
      evt.preventDefault();
      success.classList.add("modal--show");
    }
});
