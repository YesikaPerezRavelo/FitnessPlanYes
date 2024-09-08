# Front-end e-commerce \*\*

#### Website to sale fitness workut plans and storage a service

---

**Ultimate health and fitness goals**

Website to break down your ultimate health and fitness goals into small, specific and achievable mini-goals! Let´s find out what´s your IMC and let´s workout!

_Roof draft_

```javascript
function datosIMC() {
  let peso = prompt("Ingresa tu peso");
  let altura = prompt("Ingresa tu estatura en metros (EJEMPLO: 1.63)");
  let alCuadrado = altura * altura;
  let IMC = peso / alCuadrado;

  alert("Calcularemos tu índice de Masa Corporal, escribe OK para continuar");

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
}

datosIMC();
```

1. Register
2. Log In
3. Storage a day & a time to workout
4. Buy our fitness workout plans
5. Send us any question or concern

---

| Name   | Last Name | Email              |
| ------ | --------- | ------------------ |
| Yesika | Perez     | yesikapr@gmail.com |

[LinkedIn](https://www.linkedin.com/in/yesikaperezravelo/)

![imagenPerfil](https://firebasestorage.googleapis.com/v0/b/productyesfitness.appspot.com/o/fitnessProducts.png?alt=media&token=673220bd-90ca-46d0-bb5e-fc13a54f5ac7)
