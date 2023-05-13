import { createUser, signInUser } from "../firebase/firebase-config";
import { DarkBaseNav } from "../nav/DarkNav";
import { validateEmail, validatePassword } from "../utils/helpers";

const user = JSON.parse(localStorage.getItem("user") || "{}");
const isAuthenicated = user.uid ? true : false;

if (isAuthenicated) {
  window.location.href = "/browse.html";
}

const toggleForm = document.querySelector("#toggle-form") as HTMLAnchorElement;
const formHeader = document.querySelector(".form__container__header") as HTMLDivElement;
const submitButton = document.querySelector("button") as HTMLButtonElement;
const form = document.querySelector("form") as HTMLFormElement;
const emailInput = form.children[0] as HTMLInputElement;
const passwordInput = form.children[2] as HTMLInputElement;
const modal = document.querySelector(".loading-modal") as HTMLDivElement;

let isCreateAccountForm = true;
let isValidEmail = false;
let isValidPassword = false;

// generate the nav
const darkNav = new DarkBaseNav();
darkNav.generateNavOnResize();

emailInput.addEventListener("input", () => {
  const emailFeedback = form.children[1] as HTMLParagraphElement;
  const email = validateEmail(emailInput.value);

  emailFeedback.textContent = email.isValid ? email.successMessage : email.errorMessage;
  emailFeedback.classList.toggle("success", email.isValid);

  isValidEmail = email.isValid;
});

passwordInput.addEventListener("input", () => {
  const passwordFeedback = form.children[3] as HTMLParagraphElement;
  const password = validatePassword(passwordInput.value);

  passwordFeedback.textContent = password.isValid ? password.successMessage : password.errorMessage;
  passwordFeedback.classList.toggle("success", password.isValid);

  isValidPassword = password.isValid;
});

// determine when to disable the submit button
form.addEventListener("input", () => {
  const isValidInputs = isValidEmail && isValidPassword;
  submitButton.disabled = !isValidInputs;
  submitButton.classList.toggle("button__primary--dark--disabled", !isValidInputs);
});

const clearForm = () => {
  const emailFeedback = form.children[1] as HTMLParagraphElement;
  const passwordFeedback = form.children[3] as HTMLParagraphElement;

  emailInput.value = "";
  passwordInput.value = "";
  emailFeedback.textContent = "";
  passwordFeedback.textContent = "";

  isValidEmail = false;
  isValidPassword = false;

  submitButton.disabled = true;
  submitButton.classList.add("button__primary--dark--disabled");
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  //loading true
  modal.style.display = "grid";
  try {
    if (isCreateAccountForm) {
      //create user
      await createUser(email, password);
    } else {
      //login user
      await signInUser(email, password);
    }

    //redirect to broswe page and prevent back button
    window.location.href = "/browse.html";
    window.history.pushState(null, "", "/browse.html");
  } catch (error) {
    console.log(error);
  }

  // loading false
  modal.style.display = "none";

  clearForm();
});

const formHeaderContent = {
  createAccount: {
    heading: "Create Account",
    greeting: "Keep track of the movies you've watched with Movie Memory. Create an account to get started.",
    button: "Create Account",
    link: "create",
  },
  login: {
    heading: "Welcome Back",
    greeting: "Sign in to keep track of the movies you've watched with Movie Memory.",
    button: "Login",
    link: "login",
  },
};

// toggle between the login and create account forms
toggleForm.addEventListener("click", () => {
  const { createAccount, login } = formHeaderContent;

  const heading = formHeader?.children[0] as HTMLHeadingElement;
  const greeting = formHeader?.children[1] as HTMLParagraphElement;
  const buttonText = isCreateAccountForm ? login.button : createAccount.button;

  toggleForm.hash = isCreateAccountForm ? createAccount.link : login.link;
  heading.textContent = isCreateAccountForm ? login.heading : createAccount.heading;
  greeting.textContent = isCreateAccountForm ? login.greeting : createAccount.greeting;
  submitButton.textContent = buttonText;

  isCreateAccountForm = !isCreateAccountForm;
});
