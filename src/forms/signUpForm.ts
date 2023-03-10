import { Form } from "./form";
import { LoginForm } from "./loginForm";

export class SignUpForm extends Form {
  constructor(formElement: HTMLElement) {
    super(formElement);
  }

  generateCompleteForm(): void {
    const title = "Create Account";
    const headerParagraph =
      "Keep track of the movies you've watched with Movie Memory. Create an account to get started.";

    this.generateFormHeader(title, headerParagraph);

    this.generateFormBody(this.generateFormInputs.bind(this), () =>
      this.generateFormButtons(title, () =>
        console.log(this.email, this.password, "hey")
      )
    );
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
