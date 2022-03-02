import { fetchAll } from "../fetchers/fetchAll.js";
import { fetchSingle } from "../fetchers/fetchSingle.js";

function loginn() {
  let login = document.querySelector(".login__holder");

  const name = login.querySelector(".login-name");
  const surname = login.querySelector(".login-surname");
  const email = login.querySelector(".login-email");
  const button = login.querySelector(".login-submit");
  let exit = login.querySelector(".login-exit");

  button.addEventListener("click", async () => {
    if (name.value == "" || surname.value == "" || email.value == "") {
      alert("Essential data missing!");
    } else {
      let users = await fetchAll("user?page=");
      let foundUser = users.find(
        (user) => name.value == user.firstName && surname.value == user.lastName
      );
      if (foundUser) {
        let fullUser = await fetchSingle(`user/${foundUser.id}`);
        fullUser.email == email.value
          ? localStorage.setItem("user", foundUser.id)
          : alert("Wrong email!");
      } else {
        alert("User not found!");
      }
    }
  });

  exit.addEventListener("click", () => {
    login.style.display = "none";
  });
}
export { loginn };
