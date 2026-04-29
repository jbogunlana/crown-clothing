import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import FormInput from "../form-input/formInput";
import "../../scss/SignInForm.scss";
import Button from "../button/Button";

const defaultFieldForm = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formField, setFormField] = useState(defaultFieldForm);
  const { email, password } = formField;
  // console.log(formField);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword({
        email,
        password,
      });
      console.log(response);
      setFormField(defaultFieldForm);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Invalid email or password");
      } else {
        console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <br />
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
