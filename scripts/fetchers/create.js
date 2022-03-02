import { appId } from "../consts/appId.js";

async function fetchCreate(path, data) {
  try {
    const response = await fetch(`https://dummyapi.io/data/v1/${path}`, {
      method: "POST",
      headers: {
        "app-id": appId,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      },
      body: data,
      mode: "no-cors",
    });
    let nj = await response.json();
    console.log(nj);
    return await nj;
  } catch (error) {
    console.log(error);
  }
}
export { fetchCreate };
