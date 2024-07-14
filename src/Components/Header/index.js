import styles from "./Header.module.css";
import Logo from "./Logo.svg";
import { LinkBtn } from "Components/LinkBtn";
export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="Logo do site" />

      <nav className={styles.nav}>
        <LinkBtn color="blue" url="/">
          Home
        </LinkBtn>
        <LinkBtn color="white" url="novovideo">
          Novo video
        </LinkBtn>
      </nav>
    </header>
  );
};
