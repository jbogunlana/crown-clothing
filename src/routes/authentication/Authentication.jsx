import SignUpForm from "../../components/sign-up/SignUpForm";
import SignInForm from "../../components/sign-in/SignInForm";
import "../../scss/Authentication.scss";

function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
