function commentHTML(comment) {
  return `
  <div class="comment">
    <div class="comment__info">
      <p>
        ${comment.owner.title} 
        ${comment.owner.firstName} 
        ${comment.owner.lastName}    
      </p>
      <p>    
        ${new Date(comment.publishDate).toLocaleString()}
      </p>
    </div>
    <p>${comment.message}</p>
  </div>
  `;
}
export { commentHTML };
