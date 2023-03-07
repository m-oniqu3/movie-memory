import { pattern } from "./pattern";

export class Form {
  formContainer: HTMLElement;
  emailRes: string;
  password: string;

  constructor(formElement: HTMLElement) {
    this.formContainer = formElement;
    this.emailRes = "";
    this.password = "";
  }

  validateEmail = (email: string) => {
    const results = {
      errorMessage: "",
      successMessage: "",
      isEmailValid: false,
    };

    //if email is empty
    if (email === "" || email.length === 0) {
      return {
        ...results,
        errorMessage: "Email is required",
        successMessage: "",
        isEmailValid: false,
      };
    }

    //if email is not valid
    else if (email !== "" && !String(email).match(pattern)) {
      return {
        ...results,
        errorMessage: "Email is not valid",
        successMessage: "",
        isEmailValid: false,
      };
    }

    //if all fields are valid
    return {
      ...results,
      isEmailValid: true,
      successMessage: "Email is valid ✅",
    };
  };

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

    emailInput.addEventListener("input", () => {
      const emailValidationResults = this.validateEmail(emailInput.value);
      const { errorMessage, successMessage, isEmailValid } =
        emailValidationResults;

      emailError.textContent = isEmailValid ? successMessage : errorMessage;
      emailError.classList.toggle("success", isEmailValid);
    });

    inputGroup.append(emailInput, emailError, passwordInput);

    console.log(inputGroup);

    return inputGroup;
  }

  protected validiatePassword(password: string) {
    const errors = { passwordError: null, valid: false };

    //if password is less than 6 characters
    if (password !== "" && password.length < 6) {
      const message = "Password must be at least 6 characters";
      return { ...errors, passwordError: message, valid: false };
    }

    //if password is empty
    else if (password === "" || password.length === 0)
      return { ...errors, passwordError: "Password is required", valid: false };

    //if all fields are valid
    return { ...errors, valid: true };
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
