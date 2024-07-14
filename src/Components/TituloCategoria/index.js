import styles from "./TituloCategoria.module.css";

export const TituloCategoria = ({ children, color }) => {
  let backgroundColor = "";
  switch (color) {
    case "frontend":
      backgroundColor = styles.blue;
      break;
    case "backend":
      backgroundColor = styles.green;
      break;
    case "mobile":
      backgroundColor = styles.yellow;
      break;

    default:
      backgroundColor = "";
      break;
  }
  return (
    <div className={`${styles.container} ${backgroundColor}`}> {children}</div>
  );
};
