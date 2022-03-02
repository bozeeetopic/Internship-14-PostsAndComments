import { getComments } from "../actions/comments.js";
import { commentOnClicks } from "./commentOnClicks.js";

function postOnClicks() {
  let posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    const commentButton = post.querySelector(".post__comments__button");
    const commentRemoveButton = post.querySelector(".close-comments");
    const commentHolder = post.querySelector(".post__comments");

    commentButton.addEventListener("click", async () => {
      commentHolder.innerHTML += await getComments(
        commentButton.dataset.postId
      );

      localStorage.getItem("user") ? commentOnClicks(post) : "";
      commentButton.style.display = "none";
      commentRemoveButton.style.display = "block";
    });
    commentRemoveButton.addEventListener("click", () => {
      commentHolder.innerHTML = "";
      commentButton.style.display = "block";
      commentRemoveButton.style.display = "none";
    });
  });
}
export { postOnClicks };
