import { getPosts } from "./actions/posts.js";
import { pageOnClicks } from "./eventHandlers/pages.js";
import { loginn } from "./eventHandlers/login.js";

(async () => {
  let currentPage = localStorage.getItem("currentPage");
  let postsCount = await getPosts(parseInt(currentPage) - 1);
  pageOnClicks((postsCount - (postsCount % 20)) / 20 + 1);
  loginn();

  let login = document.querySelector(".log-in__button");
  login.addEventListener("click", () => {
    document.querySelector(".login__holder").style.display = "block";
  });
})();
