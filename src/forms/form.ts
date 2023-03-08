import { validateEmail, validateInput, validiatePassword } from "./helpers";

export class Form {
  formContainer: HTMLElement;

  constructor(formElement: HTMLElement) {
    this.formContainer = formElement;
  }

  protected generateFormHeader(title: string, paragraph: string) {
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const header = document.createElement("div");

    h1.classList.add("heading", "heading--small");
    p.classList.add("text");
    header.classList.add("form__container__header");

    h1.textContent = title;
    p.textContent = paragraph;

    header.append(h1, p);
    this.formContainer.appendChild(header);
  }

  private generateDomElement(
    element: string,
    placeholder?: string,
    type?: string
  ) {
    const newElement = (() => {
      if (placeholder && type) {
        const domElement = document.createElement(element) as HTMLInputElement;
        domElement.placeholder = placeholder;
        domElement.type = type;

        return domElement;
      } else {
        return document.createElement(element) as HTMLElement;
      }
    })();

    return newElement;
  }

  protected generateFormInputs() {
    const emailInput = this.generateDomElement("input", "Email", "email");
    const passwordInput = this.generateDomElement(
      "input",
      "Password",
      "password"
    );

    const emailFeedback = this.generateDomElement("p");
    const passwordFeedback = this.generateDomElement("p");
    const inputGroup = this.generateDomElement("div");

    emailFeedback.classList.add("error");
    passwordFeedback.classList.add("error");

    // add inputs then validate then
    inputGroup.append(
      emailInput,
      emailFeedback,
      passwordInput,
      passwordFeedback
    );
    this.validateFormInputs(inputGroup as HTMLDivElement);

    return inputGroup as HTMLDivElement;
  }

  private validateFormInputs(inputGroup: HTMLDivElement) {
    const emailInput = inputGroup.children[0] as HTMLInputElement;
    const emailFeedback = inputGroup.children[1] as HTMLParagraphElement;
    const passwordInput = inputGroup.children[2] as HTMLInputElement;
    const passwordFeedback = inputGroup.children[3] as HTMLParagraphElement;

    validateInput(emailInput, validateEmail, emailFeedback);
    validateInput(passwordInput, validiatePassword, passwordFeedback);
  }

  protected generateFormButtons(
    primaryButtonText: string,
    onPrimaryButtonClick: () => void
  ) {
    const primaryButton = document.createElement("button");
    const secondaryButton = document.createElement("button");
    const buttonContainer = document.createElement("div");
    const prompt = this.generatePrompt();

    primaryButton.classList.add("button", "button__primary--dark");
    secondaryButton.classList.add("button", "button__secondary--dark");
    buttonContainer.classList.add("form__container__buttonContainer");

    primaryButton.textContent = primaryButtonText;
    secondaryButton.textContent = "Continue as Guest";

    primaryButton.type = "submit";

    buttonContainer.append(primaryButton, secondaryButton, prompt);

    return buttonContainer;
  }
  // creates a form element that contains the form inputs and buttons and appends it to the form container
  protected generateFormBody(
    inputCallback: () => HTMLDivElement,
    buttonCallback: () => HTMLElement
  ) {
    const form = document.createElement("form");
    form.classList.add("form");

    const formInputs = inputCallback();
    const buttonContainer = buttonCallback();

    form.append(formInputs, buttonContainer);
    this.formContainer.append(form);
  }

  public generateCompleteForm() {}

  protected generatePrompt() {
    const prompt = document.createElement("p");
    prompt.classList.add("text");

    return prompt;
  }

  protected resetForm() {
    this.formContainer.innerHTML = "";
  }
}
