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

(async () => {
  await document
    .getElementById("imc")
    .addEventListener("click", async function datosIMC() {
      let { value: weight } = await Swal.fire({
        position: "center",
        title: "Conozcamos tu IMC",
        text: "¿Cuánto pesas en KG? (EJEMPLO: 60)",
        input: "select",
        inputPlaceholder: "weight",
        inputValue: "",
        inputOptions: {
          fifty: "50",
          fiftyOne: "51",
          fiftyTwo: "52",
          fiftyThree: "53",
          fiftyFour: "54",
          fiftyFive: "55",
          fiftySix: "56",
          fiftySeven: "57",
          fiftyEight: "58",
          fiftyNine: "59",
          sixty: "60",
          sixtyOne: "61",
          sixtyTwo: "62",
          sixtyThree: "63",
          sixtyFour: "64",
          sixtyFive: "65",
          sixtySix: "66",
          sixtySeven: "67",
          sixtyEight: "68",
          sixtyNine: "69",
          seventy: "70",
          seventyOne: "71",
          seventyTwo: "72",
          seventyThree: "73",
          seventyFour: "74",
          seventyFive: "75",
          seventySix: "76",
          seventySeven: "77",
          seventyEight: "78",
          seventyNine: "79",
          eighty: "80",
          eightyOne: "81",
          eightyTwo: "82",
          eightyThree: "83",
          eightyFour: "84",
          eightyFive: "85",
          eightySix: "86",
          eightySeven: "87",
          eightyEight: "88",
          eightyNine: "89",
          ninety: "90",
          ninetyOne: "91",
          ninetyTwo: "92",
          ninetyThree: "93",
          ninetyFour: "94",
          ninetyFive: "95",
          ninetySix: "96",
          ninetySeven: "97",
          ninetyEight: "98",
          ninetyNine: "99",
          hundred: "100",
          hundredOne: "101",
          hundredTwo: "102",
          hundredThree: "103",
          hundredFour: "104",
          hundredFive: "105",
          hundredSix: "106",
          hundredSeven: "107",
          hundredEight: "108",
          hundredNine: "109",
          hundredTen: "110",
          hundredEleven: "111",
          hundredEleven: "111",
          hundredTwelve: "112",
          hundredThirteen: "113",
          hundredFourteen: "114",
          hundredFifteen: "115",
          hundredSixteen: "116",
          hundredSeventeen: "117",
          hundredEighteen: "118",
          hundredNineteen: "119",
          hundredTwenty: "120",
          hundredTwentyOne: "121",
          hundredTwentyTwo: "122",
          hundredTwentyThree: "123",
          hundredTwentyFour: "124",
          hundredTwentyFive: "125",
          hundredTwentySix: "126",
          hundredTwentySeven: "127",
          hundredTwentyEight: "128",
          hundredTwentyNine: "129",
          hundredThirty: "130",
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
        title: "IMC",
        text: "Calcularemos tu índice de Masa Corporal,OK para continuar",
      });

      if (IMC < 18.5) {
        await Swal.fire({
          position: "center",
          title: "ResultOne",
          text: "Estás por debajo del peso apropiado",
        });
      } else if (IMC <= 24.9) {
        await Swal.fire({
          position: "center",
          title: "ResultTwo",
          text: "Eres saludable",
        });
      } else if (IMC <= 29.9) {
        await Swal.fire({
          position: "center",
          title: "ResultThree",
          text: "Tienes sobrepeso",
        });
      } else if (IMC <= 34.9) {
        await Swal.fire({
          position: "center",
          title: "ResultFour",
          text: "Tienes obesidad tipo 1",
        });
      } else if (IMC <= 39.9) {
        await Swal.fire({
          position: "center",
          title: "ResultFive",
          text: "Tienes obesidad tipo 2",
        });
      } else if (IMC >= 40) {
        await Swal.fire({
          position: "center",
          title: "ResultFive",
          text: "Tienes obesidad tipo 3",
        });
      } else {
        await Swal.fire({
          position: "center",
          title: "ResultFive",
          text: "Puede que no ingresaste un dato o ingresaste un dato inválido",
        });
      }
    });

  datosIMC();
})();
