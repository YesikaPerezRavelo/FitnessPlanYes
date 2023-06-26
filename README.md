# Fitness Plan

## Javascrip

### Portfolio

#### Website to sell fitness plan

---

**Ultimate health and fitness goals**

_Roof draft_

Website to break down your ultimate health and fitness goals into small, specific and achievable mini-goals! Let´s find out what´s your IMC and let´s workout!

```javascript
function crearCliente(nombre, apellido) {
  this.nombre = nombre || prompt("Ingresa tu nombre");
  this.apellido = apellido || prompt("Ingresa tu apellido");
  this.saludarCliente = function () {
    return `¡Hola ${this.nombre}, ${this.apellido}!`;
  };
}

const cliente1 = new crearCliente();
alert(cliente1.saludarCliente());

let edad;
do {
  edad = prompt("Ingresa tu edad");
} while (edad <= 18);

if (edad >= 18) {
  alert("Eres mayor de edad, puedes continuar");
} else {
  alert("Para continuar necesitas un adulto mayor");
  do {
    edad = prompt("Ingrese la edad del responsable");
  } while (edad <= 18);
}

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

let email = prompt("Ingresa un email");
let newPassword = prompt("Ingresa una contraseña");

if (email !== "" && newPassword !== "") {
  let confirmation = "1) " + email + " " + "2) " + newPassword + " ";
  console.log(confirmation);
} else {
  alert("Opción inválida, falta cargar datos");
}

function registro() {
  let repeatPassword = prompt("Confirma la contraseña");
  if (newPassword === repeatPassword) {
    alert("Contraseña correcta");
  } else {
    alert("Contraseña incorrecta");
    registro();
  }
}

registro();

class LetsWorkout {
  constructor(dias, precios) {
    this.dias = dias;
    this.precios = precios;
  }
}

let precios = [{ precios: "3200" }];

function cargarProducto() {
  let dias = prompt(`Elige un día para entrenar:
1:Lunes
2:Martes
3:Miercoles
4:Jueves
5:Viernes
6:Sabado
7:Domingo`);

  const diasSemana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  if (dias >= 1 && dias <= 7) {
    alert(diasSemana[dias - 1]);
    alert("Valor por hora: " + precios[0].precios);
    const nuevoProducto = new LetsWorkout(diasSemana[dias - 1], precios);
    arrayCarrito.push(nuevoProducto);
    alert("Has añadido un día de entrenamiento a tu carrito");
  } else {
    alert("Opción inválida");
  }
}

function descuentoExclusivo() {
  alert(
    "Ingresa la cantidad de días que deseas entrenar y participa por un descuento exclusivo"
  );

  let primerProducto = Number(
    prompt("¿Cuántas veces por MES te gustaría entrenar de manera presencial?")
  );
  let segundoProducto = Number(
    prompt("¿Cuántas clases por MES en línea te gustaría tomar?")
  );
  let suma = primerProducto + segundoProducto;

  if (suma >= 1 && suma <= 11) {
    alert("El descuento aplica para una mayor cantidad de clases");
  } else if (suma >= 12 && suma <= 26) {
    alert("Tendrás un 15% de descuento sobre el valor total de tus clases");
  } else {
    alert("Sigue comprando");
  }

  const nuevoDescuento = { descuento: "15%" };
  arrayCarrito.push(nuevoDescuento);
  alert("Descuento: " + nuevoDescuento.descuento);
}

let reservaHorariaCount = 0;

function reservaHoraria() {
  class Agenda {
    constructor(time, day, disponibility) {
      this.time = time;
      this.day = day;
      this.propietario = disponibility;
    }
    estaDisponible(hora) {
      return (hora >= 8 && hora <= 12) || (hora >= 15 && hora <= 19);
    }
  }

  const agenda1 = new Agenda();

  for (let index = 1; index <= 3; index++) {
    let entrada = parseInt(
      prompt(
        "Ingresa un horario en el que te gustaría entrenar con nosotros y te diremos si tenemos disponibilidad horaria. Horario Militar, ejemplo 16"
      )
    );
    if (agenda1.estaDisponible(entrada)) {
      alert("Este horario está disponible: " + entrada);
    } else {
      alert("Este horario no está disponible: " + entrada);
    }
  }

  reservaHorariaCount++;
  if (reservaHorariaCount >= 3) {
    alert("Ya has realizado el máximo de reservas horarias permitidas");
  } else {
    const nuevoHorario = { reserva: reservaHorariaCount };
    arrayCarrito.push(nuevoHorario);
    alert("Reserva: " + nuevoHorario.reserva);
  }
}

function verCarrito() {
  arrayCarrito.forEach((producto) => {
    if (producto instanceof LetsWorkout) {
      alert(
        `Elegiste ${producto.dias} por un precio de ${producto.precios[0].precios}`
      );
    } else if (producto.hasOwnProperty("descuento")) {
      alert(`Descuento: ${producto.descuento}`);
    } else if (producto.hasOwnProperty("reserva")) {
      alert(`Reserva: ${producto.reserva}`);
    }
  });
}

function mostrarOferta() {
  alert("Te presentamos nuestros productos");

  function Producto(nombre, precio) {
    this.libro = nombre;
    this.precio = precio;
    this.disponible = true;
  }

  const libro1 = new Producto("Abdomen de hierro", 8000);
  const libro2 = new Producto("Tren superior para la postura", 9000);
  const libro3 = new Producto(
    "Más de 100 entrenamientos para hacer desde casa",
    10000
  );
  const libro4 = new Producto(
    "Los mejores entrenamientos para armar una linda cola y piernas sexy",
    15000
  );

  alert(libro1.libro + " " + libro1.precio);
  alert(libro2.libro + " " + libro2.precio);
  alert(libro3.libro + " " + libro3.precio);
  alert(libro4.libro + " " + libro4.precio);

  const ofertas = [libro1, libro2, libro3, libro4].filter(
    (libro) => libro.precio < 9000
  );
  for (const oferta of ofertas) {
    alert(`LA OFERTA DE HOY ES: ${oferta.libro} A UN VALOR ${oferta.precio}`);
  }
}

function finalizarCompra() {
  const total = arrayCarrito.reduce((acc, el) => {
    if (el instanceof LetsWorkout) {
      return acc + parseInt(el.precios[0].precios);
    } else {
      return acc;
    }
  }, 0);

  const totalConDescuento = total * 0.85; // Restar un 15% al total

  alert(`Gracias por tu compra. El total a pagar es de ${totalConDescuento}`);
}

let arrayCarrito = [];

let opcion = prompt(
  "Bienvenido a Yes Fitness \n 1: Elegir día de entrenamiento \n 2: Mostrar ofertas \n 3: Participar de descuentos exclusivos \n 4: Ver disponibilidad horaria \n 5: Ver carrito \n 6: Finalizar compra \n 7: Salir"
);

while (opcion !== "7") {
  if (opcion === "1") {
    cargarProducto();
  }
  if (opcion === "2") {
    mostrarOferta();
  }
  if (opcion === "3") {
    descuentoExclusivo();
  }
  if (opcion === "4") {
    reservaHoraria();
  }
  if (opcion === "5") {
    verCarrito();
  }
  if (opcion === "6") {
    finalizarCompra();
  }
  opcion = prompt(
    "Bienvenido a Yes Fitness \n 1: Elegir otro día de entrenamiento \n 2: Mostrar ofertas \n 3: Participar de descuentos exclusivos \n 4: Ver disponibilidad horaria \n 5: Ver carrito \n 6: Finalizar compra \n 7: Salir"
  );
}
alert("¡Gracias por tu compra!");
```

1. Registe
2. Log In
3. Select our fitness plan

| Name   | Last Name | Email              |
| ------ | --------- | ------------------ |
| Yesika | Perez     | yesikapr@gmail.com |

[LinkedIn](https://www.linkedin.com/in/yesikaperezravelo/)

![imagenPerfil](./yes.webp)
