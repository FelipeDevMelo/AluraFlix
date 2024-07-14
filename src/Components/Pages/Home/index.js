import { Hero } from "Components/Hero";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <main className={styles.container}>
      <Hero />
    </main>
  );
};
