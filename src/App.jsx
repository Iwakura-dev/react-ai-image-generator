import styles from "./App.module.scss";
import { Main } from "./components/Main/Main";
function App() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles["container__circle-pink"]}></div>
        <div className={styles["container__circle-blue"]}></div>
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
