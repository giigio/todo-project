import styles from "./Empty.module.css";
import clipboard from "../../assets/clipboard.svg";

export function Empty() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={clipboard} alt="clipboard" />
      <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
      <p className={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
