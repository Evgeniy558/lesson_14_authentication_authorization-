import css from "./AppBar.module.css";
import StatusFilter from "../Status Filter/StatusFilter";
import TaskCounter from "../TaskCounter/TaskCounter";
import { useAuth } from "../../hooks/userAuth";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};
export default AppBar;
