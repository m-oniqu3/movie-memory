type FormType = "login" | "sign-up";

class Form {
  formContainer: HTMLElement;
  formType: FormType;

  constructor(form: HTMLElement, formType: FormType) {
    this.formContainer = form;
    this.formType = formType;
  }

  private generateFormHeader() {
    const h1 = document.createElement("h1");
    h1.classList.add("heading", "heading--sml");
    h1.textContent = this.formType === "sign-up" ? "Create account" : "Login";

    const p = document.createElement("p");
    p.classList.add("text");

    p.textContent =
      this.formType === "sign-up"
        ? "Start keeping track of the movies you've watched. Create an account to get started"
        : "Welcome back to Movie Memory! Login and pick up where you left off";

    const div = document.createElement("div");
    div.classList.add("form__header");

    div.append(h1, p);
    this.formContainer.append(div);
  }

  private generateFormInputs() {
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

  private generatePrompt() {
    const prompt = document.createElement("p");
    prompt.classList.add("text");

    prompt.innerHTML =
      this.formType === "sign-up"
        ? "Already have an account? <a>Login</a>"
        : "Don't have an account? <a>Sign up</a>";

    prompt.addEventListener("click", () => {
      this.toggleFormType();
    });

    return prompt;
  }

  private generateFormButtons() {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button__container");
    const logInOrSignUpButton = document.createElement("button");
    const guestButton = document.createElement("button");

    logInOrSignUpButton.classList.add("button");
    guestButton.classList.add("button", "button--secondary");

    logInOrSignUpButton.textContent =
      this.formType === "sign-up" ? "Create Account" : "Login";
    guestButton.textContent = "Continue as guest";

    const prompt = this.generatePrompt();

    buttonContainer.append(logInOrSignUpButton, guestButton, prompt);
    this.formContainer.append(buttonContainer);
  }

  private toggleFormType() {
    this.formType = this.formType === "sign-up" ? "login" : "sign-up";
    this.resetForm();
  }

  // reset form and generate new form
  private resetForm() {
    this.formContainer.innerHTML = "";
    this.generateCompleteForm();
  }

  // generate form header, inputs, and buttons
  public generateCompleteForm() {
    this.generateFormHeader();
    this.generateFormInputs();
    this.generateFormButtons();
  }
}

const form = new Form(
  document.querySelector(".form__container") as HTMLElement,
  "sign-up"
);
form.generateCompleteForm();
