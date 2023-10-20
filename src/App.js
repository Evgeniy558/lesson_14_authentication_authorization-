import { useEffect } from "react";
import "./App.css";
import { fetchTasks } from "./redux/operation";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/userAuth";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { Register } from "./components/pages/Register";
import { PrivateRoute } from "./components/PrivateRoute";
import { Tasks } from "./components/pages/Tasks";
import { Login } from "./components/pages/Login";
import { Layout } from "./components/Layout/Layout";

function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<Login />} />
          }
        />
        <Route
          path="/tasks"
          element={<PrivateRoute redirectTo="/login" component={<Tasks />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
