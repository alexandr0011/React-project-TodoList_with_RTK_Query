import { useDeleteTodoMutation } from "../../redux/todosApi";
import deleteImg from "../../assets/img/trash.png";
import styles from "./TodoItem.module.scss";

export const TodoItem = ({ task, id }) => {
  const [deleteTodo] = useDeleteTodoMutation();

  const deleteTodoHandler = async (id) => {
    await deleteTodo(id).unwrap();
  };

  return (
    <div className={styles.container}>
      {task}
      <button onClick={() => deleteTodoHandler(id)}>
        <img src={deleteImg} alt="delete task" />
      </button>
    </div>
  );
};
