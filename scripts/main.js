import { getPosts } from "./actions/posts.js";
import { pageOnClicks } from "./eventHandlers/pages.js";

(async () => {
  let currentPage = localStorage.getItem("currentPage");
  let postsCount = await getPosts(parseInt(currentPage) - 1);
  pageOnClicks((postsCount - (postsCount % 20)) / 20 + 1);
})();
