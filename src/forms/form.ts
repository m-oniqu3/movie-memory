import { validateEmail, validateInput, validatePassword } from "./helpers";

export interface Button {
  classes: string[];
  textContent: string;
  type: string;
  disabled?: boolean;
  onClick: () => void;
}

export class Form {
  formContainer: HTMLElement;
  email: string;
  password: string;

  constructor(formElement: HTMLElement) {
    this.formContainer = formElement;
    this.email = "";
    this.password = "";
  }

  protected generateFormHeader(title: string, paragraph: string) {
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const header = document.createElement("div");

    h1.classList.add("heading", "heading__small--dark");
    p.classList.add("text");
    header.classList.add("form__container__header");

    h1.textContent = title;
    p.textContent = paragraph;

    header.append(h1, p);
    this.formContainer.appendChild(header);
  }

  private generateDomElement(element: string, placeholder?: string, type?: string) {
    if (placeholder && type) {
      const domElement = document.createElement(element) as HTMLInputElement;
      domElement.placeholder = placeholder;
      domElement.type = type;

      return domElement;
    } else {
      return document.createElement(element) as HTMLElement;
    }
  }

  protected generateFormInputs() {
    const emailInput = this.generateDomElement("input", "Email", "email");
    const passwordInput = this.generateDomElement("input", "Password", "password");

    const emailFeedback = this.generateDomElement("p");
    const passwordFeedback = this.generateDomElement("p");
    const inputGroup = this.generateDomElement("div");

    emailFeedback.classList.add("error");
    passwordFeedback.classList.add("error");

    // add inputs then validate then
    inputGroup.append(emailInput, emailFeedback, passwordInput, passwordFeedback);
    this.validateFormInputs(inputGroup as HTMLDivElement);

    return inputGroup as HTMLDivElement;
  }

  protected setEmail(email: string) {
    this.email = email;
  }

  protected setPassword(password: string) {
    this.password = password;
  }

  private validateFormInputs(inputGroup: HTMLDivElement) {
    const emailInput = inputGroup.querySelector<HTMLInputElement>('input[type="email"]');
    const emailFeedback = inputGroup.querySelector<HTMLParagraphElement>(".error-email");
    const passwordInput = inputGroup.querySelector<HTMLInputElement>('input[type="password"]');
    const passwordFeedback = inputGroup.querySelector<HTMLParagraphElement>(".error-password");

    if (!emailInput || !emailFeedback || !passwordInput || !passwordFeedback) {
      throw new Error("Invalid input group");
    }

    const emailValidationCallback = () => validateEmail(emailInput.value);
    const passwordValidationCallback = () => validatePassword(passwordInput.value);

    // Bind the setGlobalState method to the class because it is a callback function
    // and the `this` keyword will not be bound to the class otherwise
    validateInput({
      input: emailInput,
      validationCallback: emailValidationCallback,
      feedbackElement: emailFeedback,
      setGlobalState: this.setEmail.bind(this),
    });

    validateInput({
      input: passwordInput,
      validationCallback: passwordValidationCallback,
      feedbackElement: passwordFeedback,
      setGlobalState: this.setPassword.bind(this),
    });
  }

  protected generateFormButtons(buttons: Button[]) {
    const formButtons = buttons.map((button) => {
      const buttonElement = document.createElement("button");
      buttonElement.classList.add(...button.classes);
      buttonElement.textContent = button.textContent;
      buttonElement.type = button.type;
      buttonElement.addEventListener("click", button.onClick);
      button.disabled && buttonElement.setAttribute("disabled", button.disabled.toString());

      return buttonElement;
    });
    const buttonContainer = document.createElement("div");
    const prompt = this.generatePrompt();

    buttonContainer.classList.add("form__container__buttonContainer");

    buttonContainer.append(...formButtons, prompt);

    return buttonContainer;
  }
  // creates a form element that contains the form inputs and buttons and appends it to the form container
  protected generateFormBody(inputCallback: () => HTMLDivElement, buttonCallback: () => HTMLElement) {
    const form = document.createElement("form");
    form.classList.add("form");

    const formInputs = inputCallback();
    const buttonContainer = buttonCallback();

    form.append(formInputs, buttonContainer);
    form.addEventListener("submit", (e) => e.preventDefault());
    this.formContainer.append(form);
  }

  protected generatePrompt() {
    const prompt = document.createElement("p");
    prompt.classList.add("text");

    return prompt;
  }

  protected resetForm() {
    this.formContainer.innerHTML = "";
  }
}
