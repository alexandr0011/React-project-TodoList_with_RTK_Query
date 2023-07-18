import { useState } from "react";
import { useGetTodosQuery } from "../../redux/todosApi";
import { AddNewTodo } from "../addNewTodo/AddNewTodo";
import { Loader } from "../loader/loader";
import { NotificationComponent } from "../notificationComponent/NotificationComponent";
import { TodosComponent } from "../todosComponent/TodosComponent";
import styles from "./TodoList.module.scss";

const NOTIFICATION_MESSAGE = "You don't have any current tasks...";
const ERROR_MESSAGE = "Sorry something went wrong, try again later...";

export const TodoList = () => {
  const [page, setPage] = useState(1);
  const { data, isError, isLoading } = useGetTodosQuery(page);

  const loading = isLoading && <Loader />;
  const error = isError && <NotificationComponent message={ERROR_MESSAGE} />;
  const content = data?.length ? (
    <TodosComponent
      todos={data}
      page={page}
      changePageHandler={changePageHandler}
    />
  ) : (
    <NotificationComponent message={NOTIFICATION_MESSAGE} />
  );

  function changePageHandler(pageNumber) {
    setPage(pageNumber);
  }

  return (
    <div className={styles.todo_list_wrapper}>
      {loading}
      <AddNewTodo />
      {error}
      {content}
    </div>
  );
};
