import { Helmet } from "react-helmet";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

export const Register = () => {
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </section>
  );
};
