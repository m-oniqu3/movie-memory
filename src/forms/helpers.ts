interface Validation {
  errorMessage: string;
  successMessage: string;
  isValid: boolean;
}

export const pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateEmail(email: string): Validation {
  const results = {
    errorMessage: "",
    successMessage: "",
    isValid: false,
  };

  //if email is empty
  if (email === "" || email.length === 0) {
    return {
      ...results,
      errorMessage: "Email is required",
      successMessage: "",
      isValid: false,
    };
  }

  //if email is not valid
  else if (email !== "" && !String(email).match(pattern)) {
    return {
      ...results,
      errorMessage: "Email is not valid",
      successMessage: "",
      isValid: false,
    };
  }

  //if all fields are valid
  return {
    ...results,
    isValid: true,
    successMessage: "Email is valid",
  };
}

export function validatePassword(password: string): Validation {
  const errors = {
    errorMessage: "",
    successMessage: "",
    isValid: false,
  };

  //if password is less than 6 characters
  if (password !== "" && password.length < 6) {
    const message = "Password must be at least 6 characters";
    return {
      ...errors,
      errorMessage: message,
      successMessage: "",
      isValid: false,
    };
  }

  //if password is empty
  else if (password === "" || password.length === 0)
    return {
      ...errors,
      errorMessage: "Password is required",
      successMessage: "",
      isValid: false,
    };

  //if all fields are valid
  return {
    ...errors,
    successMessage: "Password is valid",
    isValid: true,
  };
}

interface ValidateInput {
  input: HTMLInputElement;
  validationCallback: (value: string) => Validation;
  feedbackElement: HTMLParagraphElement;
  setGlobalState: (value: string) => void;
}

// validates the input on change and sets the global state if the input is valid

export function validateInput(props: ValidateInput) {
  const { input, validationCallback, feedbackElement, setGlobalState } = props;

  input.addEventListener("input", () => {
    const { errorMessage, successMessage, isValid } = validationCallback(input.value);

    feedbackElement.textContent = isValid ? successMessage : errorMessage;
    feedbackElement.classList.toggle("success", isValid);

    if (isValid) {
      setGlobalState(input.value);
    }
  });
}
