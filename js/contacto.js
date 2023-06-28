function message() {
  var Name = document.getElementById("name");
  var email = document.getElementById("email");
  var msg = document.getElementById("msg");
  const success = document.getElementById("success");
  const danger = document.getElementById("danger");

  if (Name.value === "" || email.value === "" || msg.value === "") {
    Swal.fire({
      title: "¡Falta información!",
      imageUrl: "../img/j.webp",
      imageWidth: "25%",
      showCloseButton: "true",
    });
  } else {
    setTimeout(() => {
      Name.value = "";
      email.value = "";
      msg.value = "";
    }, 2000);

    Swal.fire({
      title: "¡Mensaje enviado!",
      imageUrl: "../img/a.webp",
      imageWidth: "25%",
      showCloseButton: "true",
    });
  }
}
