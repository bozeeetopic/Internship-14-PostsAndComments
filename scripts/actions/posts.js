import { postOnClicks } from "../eventHandlers/postOnClicks.js";
import { fetchSingle } from "../fetchers/fetchSingle.js";
import { postHTML } from "../htmlBuilders/postHTML.js";

async function getPosts(pageNumber) {
  try {
    let json = await fetchSingle(`post?page=${pageNumber}`);

    document.querySelector(".posts-holder").innerHTML = "";
    json.data.forEach((post) => {
      document.querySelector(".posts-holder").innerHTML += postHTML(post);
    });
    return json.total;
  } catch (error) {
    console.log(error);
  }

  postOnClicks();
}
export { getPosts };
