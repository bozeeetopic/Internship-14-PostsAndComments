import { fetchAll } from "../fetchers/fetchAll.js";
import { commentHTML } from "../htmlBuilders/commentHTML.js";

async function getComments(postId) {
  try {
    const json = await fetchAll(`post/${postId}/comment?page=`);
    let stringToReturn = "";

    json.reverse().forEach((comment) => {
      stringToReturn += commentHTML(comment);
      console.log(comment);
    });
    return stringToReturn;
  } catch (error) {
    console.log(error);
  }
}

export { getComments };
