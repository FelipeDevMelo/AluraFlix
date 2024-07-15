import styles from "./Card.module.css";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
export const Card = ({
  id,
  titulo,
  categoria,
  url,
  descricao,
  thumb,
  onDelete,
}) => {
  let borderColor = "";
  switch (categoria) {
    case "frontend":
      borderColor = styles.blue;
      break;
    case "backend":
      borderColor = styles.green;
      break;
    case "mobile":
      borderColor = styles.yellow;
      break;

    default:
      borderColor = "";
      break;
  }
  return (
    <div className={`${styles.container} ${borderColor}`}>
      <img src={thumb} alt="imagem do video" />
      <div>
        <button onClick={() => onDelete(id)}>
          <FaRegTrashAlt />
          Deletar
        </button>
        <button>
          <FaEdit />
          Editar
        </button>
      </div>
    </div>
  );
};
