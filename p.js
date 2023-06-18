const product = [
  {
    id: 0,
    Image: "../img/abs.jpg",
    title: "Abs de hierro",
    price: 8000,
  },
  {
    id: 1,
    Image: "../img/upper.jpg",
    title: "Brazos",
    price: 9000,
  },
  {
    id: 2,
    Image: "../img/home.jpg",
    title: "Entrena en casa",
    price: 1000,
  },
  {
    id: 3,
    Image: "../img/sexy.jpg",
    title: "Cola y piernas",
    price: 9000,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;

document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { Image, title, price } = item;
    return (
      `<div class='box'>
      <div class='img/logo.webp'>
      <img class='images' src=${Image}></img>
      </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Agregar a carrito </button>" +
      `</div>
      </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displayCart();
  Swal.fire(
    "Buena decision!",
    "Has añadido este producto a tu carrito!",
    "success"
  );
}

function delElement(a) {
  cart.splice(a, 1);
  displayCart();
  Swal.fire("Se ha borrado un elemento de tu carrito");
}

function displayCart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Tu carrito esta vacio";
    document.getElementById("total").innerHTML = "" + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { Image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "" + total + ".00";
        return (
          `
                  <div class='d-flex justify-content-between'> 
                  <img class= 'rowimg' src=${Image}>
                  
                  <p style='font-size:20px'> ${title}</p> 
                  <h2 style='font-size:20px'>${price}.00</h2>` +
          "<i class = 'fa-solid fa-trash' onclick= 'delElement (" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach(product);

    const categories = [
      ...new Set(
        product.map((item) => {
          return item;
        })
      ),
    ];
    let i = 0;
  });

const product = [];
$.ajax({
  url: "../data.json",
  dataType: "json",
});

window.location.assign(pages / product.html);
