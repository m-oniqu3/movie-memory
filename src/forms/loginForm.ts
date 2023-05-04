import { Button, Form } from "./form";
import { SignUpForm } from "./signUpForm";

export class LoginForm extends Form {
  constructor(formElement: HTMLElement) {
    super(formElement);
  }

  generateCompleteForm(): void {
    const title = "Login";
    const greeting = "Welcome back! Log in and pick up where you left off";

    const formInputs = this.generateFormInputs.bind(this);

    const buttons: Button[] = [
      {
        classes: ["button", "button__primary--dark"],
        textContent: "Login",
        type: "submit",
        disableButton: true,
        onClick: () => {
          console.log(this.email, this.password);
        },
      },

      {
        classes: ["button", "button__secondary--dark"],
        textContent: "Continue as Guest",
        type: "submit",
        onClick: () => {
          console.log("continue as guest");
        },
      },
    ];

    const formButtons = () => this.generateFormButtons(buttons);

    this.generateFormHeader(title, greeting);
    this.generateFormBody(formInputs, formButtons);
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
