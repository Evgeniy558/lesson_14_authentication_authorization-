import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import Button from "../Button/Button";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Username
        <input type="text" name="name" className={css.field} />
      </label>
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
        Register
      </Button>
    </form>
  );
};
