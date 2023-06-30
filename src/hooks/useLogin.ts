import { useState } from "react";

interface Styles {
  checked: React.CSSProperties;
  unchecked: React.CSSProperties;
}

export const styles: Styles = {
  checked: {
    backgroundColor: "#A47643",
  },
  unchecked: {
    backgroundColor: "gray",
  },
};

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError("Password required");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const isFormValid = () => {
    return (
      email &&
      password &&
      !emailError &&
      !passwordError
    );
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid()) {
      // All form inputs are complete and checkbox is checked, proceed with submission
      const formData = {
        email,
        password,
      };
      console.log(formData);
    } else {
      // Form is not valid, handle the error or display a message to the user
      console.log("Form is not valid. Please complete all fields and check the checkbox.");
    }
  };

  
  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    showPassword,
    setShowPassword,
    handleEmailBlur,
    handlePasswordBlur,
    handleShowPasswordClick,
    handleFormSubmit,
    isFormValid
  };
};