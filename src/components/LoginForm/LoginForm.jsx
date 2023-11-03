import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import Button from "../Button/Button";
export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Email
        <input type="email" name="email" className={css.field} />
      </label>

      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          pattern=".{7,}"
          required
          title="The password must be at least 8 characters long."
          className={css.field}
        />
      </label>
      <Button type={"submit"} style={{ width: "fit-content" }}>
        Log in
      </Button>
    </form>
  );
};
