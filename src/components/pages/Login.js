import { Helmet } from "react-helmet";
import { LoginForm } from "../LoginForm/LoginForm";

export const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};
