import { fetchSingle } from "./fetchSingle.js";

async function fetchAll(link) {
  try {
    let dataJson = [];
    let i = 1;
    let fetchDataPage = await fetchSingle(link + "" + i);
    console.log(fetchDataPage);
    while (fetchDataPage.data.length) {
      dataJson = [...dataJson, ...fetchDataPage.data];
      i++;
      fetchDataPage = await fetchSingle(link + "" + i);
      console.log(fetchDataPage);
    }
    console.log(dataJson);
    return dataJson;
  } catch (error) {
    console.log(error);
  }
}
export { fetchAll };
