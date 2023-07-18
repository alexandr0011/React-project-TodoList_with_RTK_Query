import { useState } from "react";
import { useAddTodoMutation } from "../../redux/todosApi";
import okImg from "../../assets/img/ok.png";
import styles from "./AddNewTodo.module.scss";

export const AddNewTodo = () => {
  const [newTask, setNewTask] = useState("");
  const [addTodo] = useAddTodoMutation();

  const addTodoHandler = async () => {
    if (newTask) {
      await addTodo({ task: newTask }).unwrap();
      setNewTask("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Add new todo..."
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className={styles.add_new_todo_input}
      />
      <button className={styles.add_new_todo_button} onClick={addTodoHandler}>
        <img src={okImg} alt="add todo" />
      </button>
    </div>
  );
};
