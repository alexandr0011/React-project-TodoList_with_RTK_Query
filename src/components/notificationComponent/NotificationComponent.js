import style from "./NotificationComponent.module.scss";

export const NotificationComponent = ({ message }) => {
  return (
    <div className={style.container}>
      <h2>{message}</h2>
    </div>
  );
};
