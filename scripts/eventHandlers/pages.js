function pageOnClicks(pageCount) {
  let buttons = document.querySelector(".page-buttons");

  const goToStartButton = buttons.querySelector(".full--left");
  const goLeftButton = post.querySelector(".fa-angle-left");
  const goRightButton = post.querySelector(".fa-angle-right");
  const goToEndButton = buttons.querySelector(".full--right");
  currentPage = localStorage.getItem("currentPage");

  goToStartButton.addEventListener("click", () => {
    localStorage.setItem("currentPage", 0);
    goToStartButton.style.display = "none";
    goLeftButton.style.display = "none";
    goToEndButton.style.display = "block";
    goRightButton.style.display = "block";
  });
  goToEndButton.addEventListener("click", () => {
    localStorage.setItem("currentPage", pageCount);
    goToEndButton.style.display = "none";
    goRightButton.style.display = "none";
    goToStartButton.style.display = "block";
    goLeftButton.style.display = "block";
  });

  goLeftButton.addEventListener("click", () => {
    localStorage.setItem("currentPage", currentPage - 1);
    goToStartButton.style.display = "none";
  });
  -goRightButton.addEventListener("click", () => {
    localStorage.setItem("currentPage", currentPage + 1);
    goToEndButton.style.display = "none";
  });
}
