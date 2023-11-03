import { Helmet } from "react-helmet";
import { LoginForm } from "../LoginForm/LoginForm";

export const Login = () => {
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </section>
  );
};
