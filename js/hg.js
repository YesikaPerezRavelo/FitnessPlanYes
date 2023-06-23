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
          curenta: "40kg",
          cincuenta: "50kg",
          sesenta: "60kg",
        },
      });
    });
  
    if (peso) {
      alert("hola");
    }
  })();
  