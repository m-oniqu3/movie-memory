import { validateEmail } from "./helpers";

export class Form {
  formContainer: HTMLElement;
  emailRes: string;
  password: string;

  constructor(formElement: HTMLElement) {
    this.formContainer = formElement;
    this.emailRes = "";
    this.password = "";
  }

  protected generateFormHeader(title: string, paragraph: string) {
    console.log("header");

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

  protected generateFormInputs() {
    const emailInput = document.createElement("input");
    const passwordInput = document.createElement("input");
    const emailError = document.createElement("p");
    const inputGroup = document.createElement("div");

    emailError.classList.add("error");

    emailInput.type = "email";
    emailInput.placeholder = "Email";

    passwordInput.type = "password";
    passwordInput.placeholder = "Password";

    inputGroup.append(emailInput, emailError, passwordInput);
    this.validateFormInputs(inputGroup);

    return inputGroup;
  }

  private validateFormInputs(inputGroup: HTMLDivElement) {
    const emailInput = inputGroup.children[0] as HTMLInputElement;
    const emailError = inputGroup.children[1] as HTMLParagraphElement;
    // const passwordInput = inputGroup.children[2] as HTMLInputElement;

    emailInput.addEventListener("input", () => {
      const emailValidationResults = validateEmail(emailInput.value);
      const { errorMessage, successMessage, isEmailValid } =
        emailValidationResults;

      emailError.textContent = isEmailValid ? successMessage : errorMessage;
      emailError.classList.toggle("success", isEmailValid);
    });
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

  /**
   * @param inputCallback creates the form inputs and returns them as a div
   * @param buttonCallback creates the form buttons and returns them as a div
   * creates a form element that contains the form inputs and buttons and appends it to the form container
   */
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

  generatePrompt() {
    const prompt = document.createElement("p");
    prompt.classList.add("text");

    return prompt;
  }

  resetForm() {
    this.formContainer.innerHTML = "";
  }
}
