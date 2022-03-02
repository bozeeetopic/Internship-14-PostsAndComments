import { commentHTML } from "../htmlBuilders/commentHTML.js";
import { fetchCreate } from "../fetchers/create.js";
import { fetchSingle } from "../fetchers/fetchSingle.js";

function commentOnClicks(post) {
  const commentHolder = post.querySelector(".post__comments");
  const postId = post.querySelector(".post__comments__button");
  const submitComment = post.querySelector(".post__comment__submit");

  submitComment.innerHTML = localStorage.getItem("user")
    ? '<div class="comments__input"><input class="comment__text" type="text" placeholder="Write comment text here"><input class="comment__submit" type="submit"></div>'
    : "";
  const commentButton = post.querySelector(".comment__submit");
  const commentValue = post.querySelector(".comment__text");

  commentButton.addEventListener("click", async () => {
    const user = await fetchSingle(`user/${localStorage.getItem("user")}`);
    let comment = {
      owner: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        picture: user.picture,
        title: user.title,
      },
      message: commentValue.value,
      publishDate: new Date(),
      post: postId.dataset.postId,
    };
    console.log(comment);
    await fetchCreate("comment/create", comment);
    commentHolder.innerHTML += commentHTML(comment);
    commentValue.value = "";
  });
}
export { commentOnClicks };
