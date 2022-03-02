import { commentHTML } from "../htmlBuilders/commentHTML.js";
import { fetchCreate } from "../fetchers/create.js";
import { fetchSingle } from "../fetchers/fetchSingle.js";

function commentOnClicks(post) {
  const commentHolder = post.querySelector(".post__comments");
  const postId = post.querySelector(".post__comments__button");
  const submitComment = post.querySelector(".post__comment__submit");

  submitComment.innerHTML = localStorage.getItem("user")
    ? "<div class='comments__input'>" +
      "<input class='comment__text' type='text' placeholder='Write comment text here'>" +
      "<input class='comment__submit' type='submit'>" +
      "</div>"
    : "";
  const commentButton = post.querySelector(".comment__submit");
  const commentValue = post.querySelector(".comment__text");

  commentButton.addEventListener("click", async () => {
    const user = await fetchSingle(`user/${localStorage.getItem("user")}`);
    let comment = {
      message: commentValue.value,
      owner: {
        firstName: user.firstName,
        id: user.id,
        lastName: user.lastName,
        picture: user.picture,
        title: user.title,
      },
      post: postId.dataset.postId,
      publishDate: new Date(),
    };
    await fetchCreate("comment/create", comment);
    commentHolder.innerHTML += commentHTML(comment);
    commentValue.value = "";
  });
}
export { commentOnClicks };
