import { Link } from "react-router-dom";
import styles from "./LinkBtn.module.css";

export const LinkBtn = ({ children, url, ativo }) => {
  return (
    <Link
      to={url}
      className={`${styles.link} ${
        ativo ? styles.linkAtivo : styles.linkNormal
      } `}
    >
      {children}
    </Link>
  );
};
