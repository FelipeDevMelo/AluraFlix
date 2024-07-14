import { Link } from "react-router-dom";
import styles from "./LinkBtn.module.css";

export const LinkBtn = ({ children, url, color }) => {
  const buttonStyle = color === "blue" ? styles.blue : styles.white;
  return (
    <Link to={url} className={`${styles.link} ${buttonStyle} `}>
      {children}
    </Link>
  );
};
