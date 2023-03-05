export class Form {
  formContainer: HTMLElement;

  constructor(formElement: HTMLElement) {
    this.formContainer = formElement;
  }

  protected generateFormHeader(title: string, paragraph: string) {
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const div = document.createElement("div");

    h1.classList.add("heading", "heading--sml");
    p.classList.add("text");

    h1.textContent = title;
    p.textContent = paragraph;

    div.append(h1, p);
    this.formContainer.appendChild(div);
  }

  protected generateFormInputs() {
    const firstFormGroup = document.createElement("div");
    const emailLabel = document.createElement("label");
    const emailInput = document.createElement("input");

    const secondFormGroup = document.createElement("div");
    const passwordLabel = document.createElement("label");
    const passwordInput = document.createElement("input");

    firstFormGroup.classList.add("form__group");
    emailLabel.textContent = "Email";
    emailInput.type = "email";

    secondFormGroup.classList.add("form__group");
    passwordLabel.textContent = "Password";
    passwordInput.type = "password";

    firstFormGroup.append(emailLabel, emailInput);
    secondFormGroup.append(passwordLabel, passwordInput);

    this.formContainer.append(firstFormGroup, secondFormGroup);
  }

  protected generateFormButtons(
    primaryButtonText: string,
    onClick: () => void
  ) {
    const primaryButton = document.createElement("button");
    const secondaryButton = document.createElement("button");
    const buttonContainer = document.createElement("div");
    const prompt = this.generatePrompt();

    primaryButton.classList.add("button", "button--primary");
    secondaryButton.classList.add("button", "button--primary");

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
