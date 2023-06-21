function registro() {
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var password2 = document.getElementById("password2");

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  if (
    username.value === "" ||
    email.value === "" ||
    password.value === "" ||
    password2 === ""
  ) {
    Swal.fire({
      title: "¡Falta información",
      imageUrl: "img/j.webp",
      imageWidth: "25%",
      showCloseButton: "true",
    });
  } else {
    setTimeout(() => {
      username.value = "";
      email.value = "";
      password.value = "";
    }, 2000);

    Swal.fire({
      title: "Bienvenido",
      imageUrl: "img/a.webp",
      imageWidth: "25%",
      html: '<a href="pages/user.html" class="sweetAlertButton">Enviar</a>',
      padding: "1rem",
      showConfirmButton: false,
      showCloseButton: "true",
      showCancelButton: false,
    });
  }

  setTimeout(() => {
    danger.style.display = "none";
    success.style.display = "none";
  }, 4000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  registro();
});
