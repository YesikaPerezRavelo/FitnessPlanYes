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

    if (registro.value === "") {
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
registro();
{
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

    if (
      usernameValue.trim() === "" ||
      email.value.trim() ||
      password.value.trim() ||
      password2.value.trim()
    ) {
      setError(Swal.fire("Falta información"));
    } else {
      setSuccess(Swal.fire("se ha agregado informacion"));
    }

    if (password2Value !== passwordValue) {
      setError(Swal.fire("Falta información"));
    } else {
      setSuccess(Swal.fire("se ha agregado informacion"));
    }
  };
}
