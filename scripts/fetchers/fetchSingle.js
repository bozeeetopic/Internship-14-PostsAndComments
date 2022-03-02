import { appId } from "../consts/appId.js";

async function fetchSingle(link) {
  try {
    const response = await fetch(`https://dummyapi.io/data/v1/${link}`, {
      headers: {
        "app-id": appId,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
export { fetchSingle };
