import { BaseNav } from "./nav/BaseNav";

// generate navbar
const baseNav = new BaseNav();
baseNav.generateNavbar();

const navigateButton = document.querySelector("#navigate") as HTMLAnchorElement;

navigateButton.addEventListener("click", (event) => {
  event.preventDefault();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user) {
    window.location.href = "/account.html";
  } else {
    window.location.href = "/browse.html";
  }
});
