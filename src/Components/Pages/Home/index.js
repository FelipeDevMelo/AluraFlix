import { Hero } from "Components/Hero";
import styles from "./Home.module.css";
import { SectionCategoria } from "Components/SectionCategoria";

export const Home = () => {
  return (
    <main className={styles.container}>
      <Hero />
      <SectionCategoria />
    </main>
  );
};
