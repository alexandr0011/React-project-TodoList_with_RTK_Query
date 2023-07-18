import { Pagination } from "../pagination/Pagination";
import { TodoItem } from "../todoItem/TodoItem";
import styles from "./TodosComponent.module.scss";

export const TodosComponent = ({ todos, page, changePageHandler }) => {
  return (
    <div className={styles.container}>
      <h2>Current tasks:</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} task={todo.task} id={todo.id} />
      ))}
      <Pagination page={page} changePageHandler={changePageHandler} />
    </div>
  );
};
