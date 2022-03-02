function login() {
  let login = document.querySelector(".login__form");

  const name = login.querySelector(".login-name");
  const surname = login.querySelector(".login-surname");
  const email = login.querySelector(".login-email");

  pageCounter.innerHTML = localStorage.getItem("currentPage");
}
