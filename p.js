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
      <img class='Image' src=${Image}></img>
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





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    />

    <!-- FontAwesome -->
    <script src="https://kit.fontawesome.com/d38906d55b.js" crossorigin="anonymous"></script>


    <!-- CCS Style -->

    <link rel="stylesheet" href="../css/style.css" />

    <!-- Google fonts -->
    <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap"
          rel="stylesheet"
        />

 <!-- SweetAlert -->
 <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <title>FitnessPlanYes</title>
  </head>
  <body>
    <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <div class="logo">
              <a href="../index.html">
                <img src="../img/Logo.webp" alt="Logo" />
              </a>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon float-start"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link px-3" href="../index.html">Registro</a>
                </li>

                

                <li class="nav-item">
                    <a class="nav-link px-3" href="../pages/appointment.html">Reserva tu clase</a>
                  </li>

                <li class="nav-item">
                  <a class="nav-link active text-danger px-3" aria-current="page" href="../pages/products.html"
                    >Productos</a>
                </li>
                
            
            
                <li class="nav-item">
                  <a class="nav-link px-3" href="../pages/contact.html">Contacto</a>
                </li>
                
          </div>
        </nav>
      </header>
  
<!-- Productos -->


  
   <div class="container">
      <div class="cart"><i class="fa-solid fa-cart-shopping"></i><p id="count">0</p></div>
      </div>
    


<div class="container">
      <div id = "root"></div>
    
      <div class="sidebar">
        <div class="head"><p>Mi carrito</p></div>
        <div id="cartItem">Tu carrito esta vacio</div>
        <div class="foot">
  <h2>Total</h2>
  <h3 id="total"> 0.00</h3>
    </div>
  </div>


    

   
    
    

      </div>

    </div>

   

<!-- Footer -->
 
  <!-- Copyright -->
  <div class="text-center p-4">
    © 2023 Copyright: 
    <a class="text-reset fw-bold" href="">Yesika Perez Ravelo  </a>
    <a href="" class="me-4 link-secondary">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-linkedin"></i>
      </a>
   
      
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer End-->

<!-- JS -->
<script src="../js/products.js"></script>

    <!-- Bootstrap -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
      crossorigin="anonymous"
    ></script>
  </body>
</html>



window.location.assign(pages / product.html);