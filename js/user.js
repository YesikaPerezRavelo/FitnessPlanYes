(async () => {
  await document
    .getElementById("imc")
    .addEventListener("click", async function datosIMC() {
      let { value: weight } = await Swal.fire({
        position: "center",
        title: "Conozcamos tu IMC",
        text: "¿Cuánto pesas?",
        input: "select",
        inputPlaceholder: "weight",
        inputValue: "",
        inputOptions: {
          cincuenta: "50kg",
          sesenta: "60kg",
          setenta: "70kg",
        },
      });

      let { value: height } = await Swal.fire({
        position: "center",
        title: "Estatura",
        text: "Ingresa tu estatura en metros (EJEMPLO: 1.63)",
        input: "select",
        inputPlaceholder: "height",
        inputValue: "",
        inputOptions: {
          unmetrosesenta: "1.60",
          unmetrosetenta: "1.70",
          unmetroochenta: "1.80",
        },
      });

      let alCuadrado = height * height;
      let IMC = weight / alCuadrado;

      await Swal.fire({
        position: "center",
        title: "Estatura",
        text: "Calcularemos tu índice de Masa Corporal, escribe OK para continuar",
      });

      if (IMC < 18.5) {
        alert("Estás por debajo del peso apropiado");
      } else if (IMC <= 24.9) {
        alert("Eres saludable");
      } else if (IMC <= 29.9) {
        alert("Tienes sobrepeso");
      } else if (IMC <= 34.9) {
        alert("Tienes obesidad tipo 1");
      } else if (IMC <= 39.9) {
        alert("Tienes obesidad tipo 2");
      } else if (IMC >= 40) {
        alert("Tienes obesidad tipo 3");
      } else {
        alert("Puede que no ingresaste un dato o ingresaste un dato inválido");
      }
    });

  datosIMC();
})();
