import { getPosts } from "../actions/posts.js";
function pageOnClicks(pageCount) {
  let buttons = document.querySelector(".page-buttons");

  const goToStartButton = buttons.querySelector(".full--left");
  const goLeftButton = buttons.querySelector(".fa-angle-left");
  const goRightButton = buttons.querySelector(".fa-angle-right");
  const goToEndButton = buttons.querySelector(".full--right");
  const pageCounter = buttons.querySelector(".current-page");

  pageCounter.innerHTML = localStorage.getItem("currentPage")
    ? localStorage.getItem("currentPage")
    : 1;

  if (pageCount === 1) {
    goToStartButton.style.display = "none";
    goLeftButton.style.display = "none";
    goToEndButton.style.display = "none";
    goRightButton.style.display = "none";
  }
  if (parseInt(localStorage.getItem("currentPage")) === 1) {
    goToStartButton.style.display = "none";
    goLeftButton.style.display = "none";
  }
  if (parseInt(localStorage.getItem("currentPage")) === pageCount) {
    goToEndButton.style.display = "none";
    goRightButton.style.display = "none";
  }

  goToStartButton.addEventListener("click", async () => {
    localStorage.setItem("currentPage", 1);
    goToStartButton.style.display = "none";
    goLeftButton.style.display = "none";
    goToEndButton.style.display = "block";
    goRightButton.style.display = "block";
    await getPosts(0);
  });
  goToEndButton.addEventListener("click", async () => {
    localStorage.setItem("currentPage", pageCount);
    goToEndButton.style.display = "none";
    goRightButton.style.display = "none";
    goToStartButton.style.display = "block";
    goLeftButton.style.display = "block";
    pageCounter.innerHTML = pageCount;
    await getPosts(pageCount - 1);
  });

  goLeftButton.addEventListener("click", async () => {
    let currentPage = localStorage.getItem("currentPage");
    localStorage.setItem("currentPage", parseInt(currentPage) - 1);
    if (!(parseInt(currentPage) - 2)) {
      goToStartButton.style.display = "none";
      goLeftButton.style.display = "none";
    }
    goToEndButton.style.display = "block";
    goRightButton.style.display = "block";
    pageCounter.innerHTML = currentPage - 1;
    await getPosts(parseInt(currentPage) - 2);
  });
  goRightButton.addEventListener("click", async () => {
    let currentPage = localStorage.getItem("currentPage");
    localStorage.setItem("currentPage", parseInt(currentPage) + 1);
    if (parseInt(currentPage) + 1 === pageCount) {
      goToEndButton.style.display = "none";
      goRightButton.style.display = "none";
    }
    goToStartButton.style.display = "block";
    goLeftButton.style.display = "block";
    pageCounter.innerHTML = parseInt(currentPage) + 1;
    await getPosts(parseInt(currentPage));
  });
}
export { pageOnClicks };
