async function getComments(postId) {
  try {
    const response = await fetch(
      `https://dummyapi.io/data/v1/post/${postId}/comment`,
      {
        headers: {
          "app-id": "621277c77c4302acef16b3a1",
        },
      }
    );
    const json = await response.json();

    let user = localStorage.getItem("user");
    let stringToReturn = "";

    json.data.reverse().forEach((comment) => {
      stringToReturn += `
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
    });
    stringToReturn += '<div class="comments__input">';
    stringToReturn += user
      ? '<input type="text" placeholder="Write comment text here"><input type="submit">'
      : "";
    stringToReturn += "</div>";
    return stringToReturn;
  } catch (error) {
    console.log(error);
  }
}

export { getComments };
