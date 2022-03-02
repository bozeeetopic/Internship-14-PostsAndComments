import { appId } from "../consts/appId.js";

async function fetchCreate(path, data) {
  try {
    const response = await fetch(`https://dummyapi.io/data/v1/${path}`, {
      method: "POST",
      headers: {
        "app-id": appId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
export { fetchCreate };
