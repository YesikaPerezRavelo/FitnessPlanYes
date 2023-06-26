(async () => {
  await document
    .getElementById("imc")

    .addEventListener("click", async function datosIMC() {
      let { value: weight } = await Swal.fire({
        position: "center",
        title: "Conozcamos tu IMC",
        text: "¿Cuánto pesas en KG? (EJEMPLO: 60)",
        input: "text",
        inputPlaceholder: "weight",
        inputValue: "",
      });

      let { value: height } = await Swal.fire({
        position: "center",
        title: "Estatura",
        text: "Ingresa tu estatura en metros (EJEMPLO: 1.63)",
        input: "text",
        inputPlaceholder: "height",
        inputValue: "",
      });

      let alCuadrado = height * height;
      let IMC = weight / alCuadrado;

      await Swal.fire({
        position: "center",
        title: "IMC",
        text: "Calcularemos tu índice de Masa Corporal,OK para continuar",
      });

      if (IMC < 18.5) {
        await Swal.fire({
          position: "center",
          title: "IMC",
          imageUrl: "img/d.webp",
          imageWidth: "25%",
          text: "Estás por debajo del peso apropiado",
        });
      } else if (IMC <= 24.9) {
        await Swal.fire({
          position: "center",
          title: "IMC",
          imageUrl: "../img/i.webp",
          imageWidth: "25%",
          text: "Eres saludable",
        });
      } else if (IMC <= 29.9) {
        await Swal.fire({
          position: "center",
          title: "IMC",
          imageUrl: "../img/f.webp",
          imageWidth: "25%",
          text: "Tienes sobrepeso, tranqui yo te ayudare",
        });
      } else if (IMC <= 34.9) {
        await Swal.fire({
          position: "center",
          title: "IMC",
          imageUrl: "../img/f.webp",
          imageWidth: "25%",
          text: "Tienes obesidad tipo 1, tranqui yo te ayudare",
        });
      } else if (IMC <= 39.9) {
        await Swal.fire({
          position: "center",
          title: "IMC",
          imageUrl: "../img/f.webp",
          imageWidth: "25%",
          text: "Tienes obesidad tipo 2, tranqui yo te ayudare",
        });
      } else if (IMC >= 40) {
        await Swal.fire({
          position: "center",
          title: "IMC",
          imageUrl: "../img/f.webp",
          imageWidth: "25%",
          text: "Tienes obesidad tipo 3, tranqui yo te ayudare",
        });
      } else {
        await Swal.fire({
          position: "center",
          title: "IMC",
          text: "Puede que no ingresaste un dato o ingresaste un dato inválido",
        });
      }
    });
  datosIMC();
})();
