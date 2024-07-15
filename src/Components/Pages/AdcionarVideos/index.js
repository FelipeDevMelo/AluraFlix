import React, { useState } from "react";
import styles from "./AdcionarVideos.module.css";
const AddVideo = () => {
  const [video, setVideo] = useState({
    titulo: "",
    categoria: "",
    url: "",
    descricao: "",
    thumb: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo({
      ...video,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Video added:", data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }

    setVideo({
      titulo: "",
      categoria: "",
      url: "",
      descricao: "",
      thumb: "",
    });
  };

  return (
    <container className={styles.container}>
      <h1>NOVO VÍDEO</h1>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
      <div className={styles.criarcard}>
        <h2>Criar card</h2>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label for="titulo">Titulo</label>
          <input
            type="text"
            name="titulo"
            value={video.titulo}
            onChange={handleChange}
            placeholder="Título"
            required
          />
        </div>
        <div>
          <label for="categoria">Categoria</label>
          <input
            type="text"
            name="categoria"
            value={video.categoria}
            onChange={handleChange}
            placeholder="Categoria"
            required
          />
        </div>
        <div>
          <label for="url">URL</label>
          <input
            type="text"
            name="url"
            value={video.url}
            onChange={handleChange}
            placeholder="URL"
            required
          />
        </div>
        <div>
          <label for="descricao">Descrição</label>
          <input
            type="text"
            name="descricao"
            value={video.descricao}
            onChange={handleChange}
            placeholder="Descrição"
          />
        </div>
        <div>
          <label for="thumb">Thumbnail URL</label>
          <input
            type="text"
            name="thumb"
            value={video.thumb}
            onChange={handleChange}
            placeholder="Thumbnail URL"
            required
          />
        </div>
        <button type="submit">Add Video</button>
      </form>
    </container>
  );
};

export default AddVideo;
