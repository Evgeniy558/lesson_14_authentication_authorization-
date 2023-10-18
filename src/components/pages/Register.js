import { Helmet } from "react-helmet";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

export const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
};
