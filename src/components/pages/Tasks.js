import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/operation";
import { selectIsLoading } from "../../redux/filters/selectors";
import TaskList from "../TaskList/TaskList";

export const Tasks = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>

      <TaskList>
        <div>{isLoading && "Request in progress..."}</div>
      </TaskList>
    </div>
  );
};
