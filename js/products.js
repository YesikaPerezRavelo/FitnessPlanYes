const product = [
  {
    id: 0,
    Image: "img/logo.webp",
    title: "Abdomen de hierro",
    price: 8000,
  },
  {
    id: 1,
    Image: "img/logo.webp",
    title: "Tren superior para la postura",
    price: 9000,
  },
  {
    id: 2,
    Image: "img/logo.webp",
    title: "Mas de 100 entrenamientos para hacer desde casa",
    price: 1000,
  },
  {
    id: 3,
    Image: "img/logo.webp",
    title:
      "Los mejores entrenamientos para armar una linda cola y piernas sexy",
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
}

function delElement(a) {
  cart.splice(a, 1);
  displayCart();
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
          `< class='cart-item'>
                <div class='img/logo.webp'> 
                <img class= 'rowimg' src=${Image}>
                </div>
                <p style='font-size:12px'>${title}</p> 
                <h2 style='font-size:15px'>${price}.00</h2>` +
          "<i class = 'fa-solid fa-trash' onclick= 'delElement (" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
