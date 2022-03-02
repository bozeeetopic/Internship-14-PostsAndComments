function postHTML(post) {
  return `
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
        <div class="post__footer__likes">
          <h4>${post.likes}</h4>
          <div class="post__like"></div>
        </div>
      </div>
      <div class"post__comments__button-wrapper">
        <div class="post__comments__button" data-post-id="${post.id}">
          <i class="fa fa-chevron-down"></i>
          <i class="fa fa-chevron-down"></i>
        </div>
        <div class="post__comments__button close-comments">
          <i class="fa fa-chevron-up"></i>
          <i class="fa fa-chevron-up"></i>
        </div>
      </div>

      <div class="post__comments"></div>
    </div>
    `;
}
export { postHTML };
