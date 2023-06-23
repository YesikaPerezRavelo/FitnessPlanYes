(async () => {
  await document.getElementById("imc").addEventListener("click", function () {
    const { value: peso } = Swal.fire({
      position: "center",
      title: "Conozcamos tu IMC",
      text: "¿Cuanto pesas?",
      input: "select",
      inputPlaceholder: "peso",
      inputValue: "",
      inputOptions: {
        40: "40kg",
        50: "50kg",
        60: "60kg",
      },
    });
  });

  if (peso) {
    alert("hola");
  }
})();
