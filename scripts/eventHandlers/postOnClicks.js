import { getComments } from "../actions/comments.js";
import { postHTML } from "../htmlBuilders/postHTML.js";
import { commentOnClicks } from "./commentOnClicks.js";

function postOnClicks() {
  let posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    const commentButton = post.querySelector(".post__comments__button");
    const commentRemoveButton = post.querySelector(".close-comments");
    const commentHolder = post.querySelector(".post__comments");
    const submitPost = document.querySelectorAll(".posts-submit");

    submitPost.innerHTML = localStorage.getItem("user")
      ? "<div class='post__input'>" +
        "<input class='post__text' type='text' placeholder='Write post text here'>" +
        "<input class='post__picture' type='text' placeholder='Write picture link'>" +
        "<input class='post__tags' type='text' placeholder='Write tags, sepperated by space'>" +
        "<input class='post__submit' type='submit'>" +
        "</div>"
      : "";
    const submitPostButton = document.querySelectorAll(".post-submit");

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
      post.querySelector(".post__comment__submit").innerHTML = "";
    });

    submitPostButton.addEventListener("click", async () => {
      const submitPostText = submitPost.querySelectorAll(".post__text");
      const submitPostImage = submitPost.querySelectorAll(".post__picture");
      const submitPostTags = submitPost.querySelectorAll(".post__tags");

      const user = await fetchSingle(`user/${localStorage.getItem("user")}`);
      let post = {
        image: submitPostImage.value,
        likes: 0,
        owner: {
          firstName: user.firstName,
          id: user.id,
          lastName: user.lastName,
          picture: user.picture,
          title: user.title,
        },
        publishDate: new Date(),
        tags: submitPostTags.value.split(" "),
        text: submitPostText.value,
      };
      await fetchCreate("post/create", post);

      const postHolder = document.querySelector(".posts-holder");
      postHolder.innerHTML = postHTML(post) + postHolder.innerHTML;
      submitPostTags.value = "";
      submitPostText.value = "";
      submitPostImage.value = "";
    });
  });
}
export { postOnClicks };
