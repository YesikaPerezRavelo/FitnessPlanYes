const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let form = document.getElementById("form").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  if (setSuccess) {
    swal;
  } else if (setError) {
    swalfire;
  }

  if (usernameValue === "") {
    setError(username, "Username is required");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Falta información",
    });
  } else {
    setSuccess(username);
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

  Swal.fire(
    "Buena decision!",
    "Has añadido este producto a tu carrito!",
    "success"
  );
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// const validateInputs = () => {
//   const usernameValue = username.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();
//   const password2Value = password2.value.trim();

// if (usernameValue === "") {
//   setError(username, "Username is required");
// } else {
//   setSuccess(username);
// }

// if (emailValue === "") {
//   setError(email, "Email is required");
// } else if (!isValidEmail(emailValue)) {
//   setError(email, "Provide a valid email address");
// } else {
//   setSuccess(email);
// }

// if (passwordValue === "") {
//   setError(password, "Password is required");
// } else if (passwordValue.length < 8) {
//   setError(password, "Password must be at least 8 character.");
// } else {
//   setSuccess(password);
// }

// if (password2Value === "") {
//   setError(password2, "Please confirm your password");
// } else if (password2Value !== passwordValue) {
//   setError(password2, "Passwords doesn't match");
// } else {
//   setSuccess(password2);
// }
// };
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let form = document.getElementById("form").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  if (
    usernameValue === "" ||
    emailValue === "" ||
    passwordValue === "" ||
    password2Value === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Falta información",
    });
  } else {
    setTimeout(() => {
      Name.value = "";
      email.value = "";
      msg.value = "";
    }, 2000);
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

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
    setError(username, "Username is required");
  } else {
    setSuccess(username);
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


function registro() {
  let repeatPassword = prompt("Confirma la contraseña");
  if (newPassword === repeatPassword) {
    alert("Contraseña correcta");
  } else {
    alert("Contraseña incorrecta");
    registro();
  }
}

registro();