const contenedor = document.getElementById("root");
const products = [];

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    let i = 0;
    data.forEach((product) => {
      products.push(product);
      const card = document.createElement("div");

      card.innerHTML =
        `
       <div class="card" style="width: 18rem;">
       <img src="images" class="${product.Image}" alt="images">
       <div class="card" style="width: 18rem;">
       <div class="card-body">
       <h5 class="card-title">${product.title}</h5>
        <span> precio: ${product.price} <span>` +
        "<button onclick='addtocart(" +
        i++ +
        ")'>Agregar a carrito </button>" +
        `</div>
        </div>`;
      contenedor.append(card);
    });
  });

const cart = [];

function addtocart(a) {
  cart.push(products[a]);
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
    document.getElementById("cartItem").innerHTML = cart.map((product) => {
      var { Image, title, price } = product;
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
    });
  }
}
