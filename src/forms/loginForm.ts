import { Form } from "./form";
import { SignUpForm } from "./signUpForm";

export class LoginForm extends Form {
  constructor(formElement: HTMLElement) {
    super(formElement);
  }

  generateCompleteForm(): void {
    this.generateFormHeader(
      "Login",
      "Welcome back! Log in and pick up where you left off"
    );
    this.generateFormInputs();
    this.generateFormBody(this.generateFormInputs, () =>
      this.generateFormButtons("Login", () => console.log("hey"))
    );
  }

  generatePrompt(): HTMLParagraphElement {
    const prompt = document.createElement("p");
    prompt.classList.add("text");

    prompt.innerHTML = `Don't have an account? <a href="#">Create Account</a>`;

    prompt.children[0].addEventListener("click", () => {
      const signUpForm = new SignUpForm(this.formContainer);
      this.resetForm();
      signUpForm.generateCompleteForm();
    });
    return prompt;
  }
}
