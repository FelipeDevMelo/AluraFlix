import styles from "./Footer.module.css";
import logo from "./Logo.svg";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src={logo} alt="logo alura flix" />
    </footer>
  );
};
