import React from "react";
import Modal from "react-modal";
import styles from "./EditVideoModal.module.css";

export const EditVideoModal = ({
  isOpen,
  onRequestClose,
  video,
  onChange,
  onSubmit,
}) => {
  if (!video) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Video Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2>EDITAR CARD:</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            name="titulo"
            value={video.titulo}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            value={video.categoria}
            onChange={onChange}
            required
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="thumb">Imagem</label>
          <input
            type="text"
            name="thumb"
            value={video.thumb}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="url">Vídeo</label>
          <input
            type="text"
            name="url"
            value={video.url}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            name="descricao"
            value={video.descricao}
            onChange={onChange}
            required
          />
        </div>
        <div className={styles.btns}>
          <button className={styles.btnAdd} type="submit">
            GUARDAR
          </button>
          <button
            className={styles.btnReset}
            type="button"
            onClick={onRequestClose}
          >
            LIMPAR
          </button>
        </div>
      </form>
    </Modal>
  );
};
