import styles from "./Header.module.css";
import todoLogo from "../assets/todo-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={todoLogo} alt="logo" />
    </header>
  );
}
