import Lottie from "lottie-react";
import loader from "./loader.json";
import styles from "./loader.module.scss";

export function Loader() {
  return (
    <div className={styles.backdrop}>
      <Lottie animationData={loader} loop={true} />
    </div>
  );
}
