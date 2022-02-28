import { getComments } from "./comments.js";

(async () => {
  try {
    const response = await fetch("https://dummyapi.io/data/v1/post", {
      headers: {
        "app-id": "621277c77c4302acef16b3a1",
      },
    });
    const json = await response.json();

    json.data.forEach((post) => {
      document.querySelector(".posts-holder").innerHTML += `
        <div class="post">
          <div class="post__header">
            <h2>${post.text}</h2>
            <div class="post__header__post-details">
              <div class="post-details__author">
                <p>By: </p>
                <h4>
                  ${post.owner.title} 
                  ${post.owner.firstName} 
                  ${post.owner.lastName}
                </h4>
              </div>
              <p>${new Date(post.publishDate).toLocaleString()}</p>
            </div>
          </div>
          
          <div class="post__image">
            <img src="${post.image}">
          </div>

          <div class="post__footer">
            <p>${post.tags}</p>
            <div class="post__footer__comments" data-post-id="${post.id}">
              <i class="fa fa-chevron-down"></i>
              <i class="fa fa-chevron-down"></i>
            </div>
            <div class="post__footer__likes">
              <h4>${post.likes}</h4>
              <div class="post__like"></div>
            </div>
          </div>

          <div class="post__comments"></div>
        </div>
        `;
    });
  } catch (error) {
    console.log(error);
  }

  let posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    let commentButton = post.querySelector(".post__footer__comments");
    let commentHolder = post.querySelector(".post__comments");
    commentButton.addEventListener("click", async () => {
      commentHolder.innerHTML = await getComments(commentButton.dataset.postId);
      commentButton.style.display = "none";
    });
  });
})();
