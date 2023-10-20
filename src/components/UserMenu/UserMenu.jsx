import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/userAuth";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
