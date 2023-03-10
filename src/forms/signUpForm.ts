import { Button, Form } from "./form";
import { LoginForm } from "./loginForm";

export class SignUpForm extends Form {
  constructor(formElement: HTMLElement) {
    super(formElement);
  }

  generateCompleteForm(): void {
    const title = "Create Account";
    const headerParagraph =
      "Keep track of the movies you've watched with Movie Memory. Create an account to get started.";

    const formInputs = this.generateFormInputs.bind(this);

    const buttons: Button[] = [
      {
        classes: ["button", "button__primary--dark"],
        textContent: "Create Account",
        type: "submit",
        disabled: this.email && this.password ? false : true,
        onClick: () => {
          console.log(this.email, this.password);
        },
      },

      {
        classes: ["button", "button__secondary--dark"],
        textContent: "Continue as Guest",
        type: "submit",
        onClick: () => {
          console.log("guest");
        },
      },
    ];

    const formButtons = () => this.generateFormButtons(buttons);

    this.generateFormHeader(title, headerParagraph);
    this.generateFormBody(formInputs, formButtons);
  }

  /**
   * override the generateFormButtons method from the Form class
   * create text to toggle between login and sign up forms
   */
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
