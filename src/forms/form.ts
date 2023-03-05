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

  protected generateFormInputs() {
    const form = document.createElement("form");
    const emailInput = document.createElement("input");
    const passwordInput = document.createElement("input");

    form.classList.add("form");

    emailInput.type = "email";
    emailInput.placeholder = "Email";

    passwordInput.type = "password";
    passwordInput.placeholder = "Password";

    form.append(emailInput, passwordInput);
    this.formContainer.append(form);
  }

  protected generateFormButtons(
    primaryButtonText: string,
    onClick: () => void
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

    primaryButton.addEventListener("click", onClick);

    buttonContainer.append(primaryButton, secondaryButton, prompt);
    this.formContainer.append(buttonContainer);
  }

  public generateCompleteForm() {
    throw new Error("Must create a subclass and override it");
  }

  generatePrompt() {
    const prompt = document.createElement("p");
    prompt.classList.add("text");

    return prompt;
  }

  resetForm() {
    this.formContainer.innerHTML = "";
  }
}
