import { BaseNav } from "./src/nav/BaseNav";

// generate navbar
const baseNav = new BaseNav();
baseNav.generateNavbar();

const navigateButton = document.querySelector("#navigate") as HTMLAnchorElement;

navigateButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("navigate button clicked");

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user.uid) {
    //window.location.href = "account.html";
    window.location.pathname = "./src/pages/account.html";
  } else {
    // window.location.href = "browse.html";
    window.location.pathname = "./src/pages/browse.html";
  }
});
