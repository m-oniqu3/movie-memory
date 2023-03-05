import { SignUpForm } from "./forms/signUpForm";

const formContainer = document.querySelector(".form__container") as HTMLElement;
const form = new SignUpForm(formContainer);
form.generateCompleteForm();
