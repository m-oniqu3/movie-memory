import { Form } from "./form";
import { LoginForm } from "./loginForm";

export class SignUpForm extends Form {
  constructor(formElement: HTMLElement) {
    super(formElement);
  }

  generateCompleteForm(): void {
    this.generateFormHeader("Create Account", "Lorem");
    this.generateFormInputs();
    this.generateFormButtons("Create Account", () => console.log("hey"));
  }

  generatePrompt(): HTMLParagraphElement {
    const prompt = document.createElement("p");
    prompt.classList.add("text");

    prompt.innerHTML = `Already have an account? <a href="#">Login</a>`;
    prompt.children[0].addEventListener("click", () => {
      const loginForm = new LoginForm(this.formContainer);
      this.resetForm();
      loginForm.generateCompleteForm();
    });

    return prompt;
  }
}
