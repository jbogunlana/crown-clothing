import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import FormInput from "../form-input/FormInput";
import { SignInContainer, ButtonContainer } from "../../styles/SignInForm";
import Button from "../button/Button";
import { BUTTON_TYPE_CLASSES } from "../button/Button";

const defaultFieldForm = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formField, setFormField] = useState(defaultFieldForm);
  const { email, password } = formField;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword({
        email,
        password,
      });

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
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
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
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <br />
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
}

export default SignInForm;
