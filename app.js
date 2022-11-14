const emailGood = document.querySelector(".form");
const emailPasGood = document.querySelector(".form-error");
const error = document.querySelector(".error");

function checkEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  let email = document.getElementById("email").value;

  if (checkEmail(email)) {
    emailPasGood.style.display = "none";
  } else {
    emailGood.style.display = "none";
    emailPasGood.style.display = "block";
    error.style.display = "block";
  }
  return false;
}
