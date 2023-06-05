form.addEventListener("submit", (e) => {
  let form = document.getElementById("form").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg").value;

  localStorage.setItem("email", email);
  localStorage.setItem("msg", msg);

  if (Name.value === "" || email.value === "" || msg.value === "") {
    alert("Falta información");
  } else {
    email.value = "";
    msg.value = "";
  }

  alert("Tu mensaje ha sido enviado");
});
