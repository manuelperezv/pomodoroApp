import ClockComponent from "../src/components/ClockComponent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <title>Pomodoro App </title>
      <ClockComponent />
    </div>
  );
}
