import styles from "./Button.module.css";
import plusIcon from "../assets/plus.svg";

export function Button() {
  return (
    <button className={styles.button}>
      Criar
      <img className={styles.plusIcon} src={plusIcon} alt="add" />
    </button>
  );
}
