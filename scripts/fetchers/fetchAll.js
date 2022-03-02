import { fetchSingle } from "./fetchSingle.js";

async function fetchAll(link) {
  try {
    let dataJson = [];
    let i = 0;
    let fetchDataPage = await fetchSingle(link + "" + i);
    while (fetchDataPage.data.length > 0) {
      dataJson = [...dataJson, ...fetchDataPage.data];
      i++;
      fetchDataPage = await fetchSingle(link + "" + i);
    }
    return dataJson;
  } catch (error) {
    console.log(error);
  }
}
export { fetchAll };
