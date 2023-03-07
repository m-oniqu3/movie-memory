export const pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateEmail(email: string) {
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
}

export function validiatePassword(password: string) {
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
