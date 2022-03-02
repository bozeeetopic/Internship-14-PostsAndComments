import { fetchAll } from "../fetchers/fetchAll.js";
import { commentHTML } from "../htmlBuilders/commentHTML.js";

async function getComments(postId) {
  try {
    const json = await fetchAll(`post/${postId}/comment?page=`);
    console.log(json);
    let stringToReturn = "";

    json.reverse().forEach((comment) => {
      stringToReturn += commentHTML(comment);
    });
    stringToReturn += localStorage.getItem("user")
      ? '<div class="comments__input"><input type="text" placeholder="Write comment text here"><input type="submit"></div>'
      : "";
    return stringToReturn;
  } catch (error) {
    console.log(error);
  }
}

export { getComments };
