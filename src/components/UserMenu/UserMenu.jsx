import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/userAuth";
import css from "./UserMenu.module.css";
export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => /*dispatch(logOut())*/ null}>
        Logout
      </button>
    </div>
  );
};
