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

export const useSignup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ confirmPasswordError, setConfirmPasswordError ] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleFirstNameBlur = () => {
    if (!firstName) {
      setFirstNameError("Full name is required.");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameBlur = () => {
    if (!lastName) {
      setLastNameError("Last name is required.");
    } else {
      setLastNameError("");
    }
  };

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

  const handleConfirmPasswordBlur = () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const isFormValid = () => {
    return (
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword &&
      isChecked &&
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError
    );
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPasswordClick = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid()) {
      // All form inputs are complete and checkbox is checked, proceed with submission
      const formData = {
        email,
        firstName,
        lastName,
        password,
        confirmPassword,
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
    firstName,
    lastName,
    setFirstName,
    setLastName,
    password,
    confirmPassword,
    setPassword,
    setConfirmPassword,
    firstNameError,
    lastNameError,
    setFirstNameError,
    setLastNameError,
    emailError,
    setEmailError,
    passwordError,
    confirmPasswordError,
    setPasswordError,
    setConfirmPasswordError,
    showPassword,
    showConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,
    isChecked,
    setIsChecked,
    handleFirstNameBlur,
    handleLastNameBlur,
    handleEmailBlur,
    handlePasswordBlur,
    handleConfirmPasswordBlur,
    handleShowPasswordClick,
    handleShowConfirmPasswordClick,
    handleCheckboxChange,
    handleFormSubmit,
    isFormValid
  };
};