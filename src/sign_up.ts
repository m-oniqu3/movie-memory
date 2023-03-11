import { SignUpForm } from "./forms/signUpForm";
import { DarkBaseNav } from "./nav/DarkNav";

const darkNav = new DarkBaseNav();
darkNav.generateNavOnResize();

const formContainer = document.querySelector(".form__container") as HTMLElement;
const form = new SignUpForm(formContainer);
form.generateCompleteForm();
