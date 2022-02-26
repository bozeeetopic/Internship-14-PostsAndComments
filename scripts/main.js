(async () => {
  try {
    const response = await fetch("https://dummyapi.io/data/v1/post", {
      headers: {
        "app-id": "621277c77c4302acef16b3a1",
      },
    });
    const json = await response.json();

    json.data.forEach((post) => {
      console.log(post);
      document.querySelector(".posts-holder").innerHTML += `
        <div class="post">
          <img src="${post.image}">
          <h2>${post.text} ${post.tags} ${post.likes}</h2>
        </div>
        `;
    });
  } catch (error) {
    console.log(error);
  }
})();
