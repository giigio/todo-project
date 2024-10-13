import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Tasks } from "./components/tasks/Tasks";

function App() {
  return (
    <main>
      <Header />
      <section className={styles.section}>
        <div className={styles.inputContainer}>
          <Input />
          <Button />
        </div>
        <div className={styles.listContainer}>
          <Tasks />
        </div>
      </section>
    </main>
  );
}

export default App;
