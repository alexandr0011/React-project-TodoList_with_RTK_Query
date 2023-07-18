import { Fragment } from "react";
import { useGetAllTodosQuery } from "../../redux/todosApi";
import styles from "./Pagination.module.scss";

export const Pagination = ({ page, changePageHandler }) => {
  const { data } = useGetAllTodosQuery();
  const pageBtns = Math.ceil(data?.length / 5);
  const pageBtnsItems = [];

  for (let i = 1; i <= pageBtns; i++) {
    pageBtnsItems.push(
      <Fragment key={i}>
        <input
          id={`page_${i}`}
          type="radio"
          value={i}
          name="pageBtns"
          checked={+page === i}
          onChange={(e) => changePageHandler(e.target.value)}
        />
        <label htmlFor={`page_${i}`} />
      </Fragment>
    );
  }
  
  return (
    pageBtns > 1 && <div className={styles.container}>{pageBtnsItems}</div>
  );
};
