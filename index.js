const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  function registro() {
    var form = document.getElementById("form").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    if (Name.value === "" || email.value === "" || msg.value === "") {
      Swal.fire("Informacion incorrecta");
    } else {
      setTimeout(() => {
        Name.value = "";
        email.value = "";
        msg.value = "";
      }, 2000);

      Swal.fire("Se envio tu informaciónm");
    }

    setTimeout(() => {
      danger.style.display = "none";
      success.style.display = "none";
    }, 4000);
  }
});

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Falta información");
    Swal.fire("Falta información");
  } else {
    setSuccess(username);
    Swal.fire("Falta información");
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};
