import { SignUpForm } from "./forms/signUpForm";
import { DarkBaseNav } from "./header";

const darkNav = new DarkBaseNav();
darkNav.generateNavOnResize();

const formContainer = document.querySelector(".form__container") as HTMLElement;
const form = new SignUpForm(formContainer);
form.generateCompleteForm();
