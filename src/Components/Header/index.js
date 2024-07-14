import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "./Logo.svg";
export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="Logo do site" />

      <nav className={styles.link}>
        <Link>Home</Link>
        <Link>Novo video</Link>
      </nav>
    </header>
  );
};
