import { getComments } from "./comments.js";
import { fetchSingle } from "./fetchers/fetchSingle.js";
import { postHTML } from "./htmlBuilders/postHTML.js";

(async () => {
  try {
    let json = await fetchSingle("post");

    json.data.forEach((post) => {
      document.querySelector(".posts-holder").innerHTML += postHTML(post);
    });
  } catch (error) {
    console.log(error);
  }

  let posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    const commentButton = post.querySelector(".post__comments__button");
    const commentRemoveButton = post.querySelector(".close-comments");
    const commentHolder = post.querySelector(".post__comments");

    commentButton.addEventListener("click", async () => {
      commentHolder.innerHTML += await getComments(
        commentButton.dataset.postId
      );
      commentButton.style.display = "none";
      commentRemoveButton.style.display = "block";
    });
    commentRemoveButton.addEventListener("click", () => {
      commentHolder.innerHTML = "";
      commentButton.style.display = "block";
      commentRemoveButton.style.display = "none";
    });
  });
})();
