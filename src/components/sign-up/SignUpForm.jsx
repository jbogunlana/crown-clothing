import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import FormInput from "../form-input/FormInput";
import { SignUpcontainer } from "../../styles/SignUpForm";
import Button from "../button/Button";

const defaultFieldForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formField, setFormField] = useState(defaultFieldForm);
  const { displayName, email, password, confirmPassword } = formField;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Paswords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword({
        email,
        password,
      });

      await createUserDocumentFromAuth(user, { displayName });
      setFormField(defaultFieldForm);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered. Try signing in.");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <SignUpcontainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpcontainer>
  );
}

export default SignUpForm;
