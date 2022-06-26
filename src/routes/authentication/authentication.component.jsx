import SignUpForm from "../../components/sign-up-form/signUpForm.component";
import SignInForm from "../../components/sign-in-form copy/signInForm.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authenticationContainer">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
