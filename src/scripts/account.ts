import { validateEmail, validatePassword } from "../forms/helpers";
import { DarkBaseNav } from "../nav/DarkNav";

const toggleForm = document.querySelector("#toggle-form") as HTMLAnchorElement;
const formHeader = document.querySelector(".form__container__header") as HTMLDivElement;
const submitButton = document.querySelector("button") as HTMLButtonElement;
const form = document.querySelector("form") as HTMLFormElement;
const emailInput = form.children[0] as HTMLInputElement;
const passwordInput = form.children[2] as HTMLInputElement;

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

const formHeaderContent = {
  createAccount: {
    heading: "Create Account",
    greeting: "Keep track of the movies you've watched with Movie Memory. Create an account to get started.",
    button: "Create Account",
  },
  login: {
    heading: "Welcome Back",
    greeting: "Sign in to keep track of the movies you've watched with Movie Memory.",
    button: "Login",
  },
};

// toggle between the login and create account forms
toggleForm.addEventListener("click", () => {
  const heading = formHeader?.children[0] as HTMLHeadingElement;
  const greeting = formHeader?.children[1] as HTMLParagraphElement;
  const buttonText = isCreateAccountForm ? formHeaderContent.login.button : formHeaderContent.createAccount.button;

  heading.textContent = isCreateAccountForm ? formHeaderContent.login.heading : formHeaderContent.createAccount.heading;
  greeting.textContent = isCreateAccountForm
    ? formHeaderContent.login.greeting
    : formHeaderContent.createAccount.greeting;
  submitButton.textContent = buttonText;

  isCreateAccountForm = !isCreateAccountForm;
});
