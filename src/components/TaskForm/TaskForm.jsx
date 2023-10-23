import css from "./TaskForm.module.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasks/operation";

const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const text = ev.target.elements.text.value;
    dispatch(addTask(text));
    ev.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          placeholder="Enter task text..."
          name="text"
          type="text"
          className={css.field}
        ></input>
        <Button type={"submit"}>Add task</Button>
      </form>
    </>
  );
};
export default TaskForm;
