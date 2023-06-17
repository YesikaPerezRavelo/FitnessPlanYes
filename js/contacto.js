function message() {
  var Name = document.getElementById("name");
  var email = document.getElementById("email");
  var msg = document.getElementById("msg");
  const success = document.getElementById("success");
  const danger = document.getElementById("danger");

  if (Name.value === "" || email.value === "" || msg.value === "") {
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

    Swal.fire("Gracias", "Tu mensaje fue enviado", "success");
  }

  setTimeout(() => {
    danger.style.display = "none";
    success.style.display = "none";
  }, 4000);
}
