function auth() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email !== "123@gmail.com" && password !== "123") {
    window.location.assign("appointment.html");
  }
}
