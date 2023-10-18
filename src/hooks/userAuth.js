import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/filters/selectors";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  return { isLoggedIn, isRefreshing, user };
};
