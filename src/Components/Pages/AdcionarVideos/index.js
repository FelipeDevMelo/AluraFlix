import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="titulo"
        value={video.titulo}
        onChange={handleChange}
        placeholder="Título"
        required
      />
      <input
        type="text"
        name="categoria"
        value={video.categoria}
        onChange={handleChange}
        placeholder="Categoria"
        required
      />
      <input
        type="text"
        name="url"
        value={video.url}
        onChange={handleChange}
        placeholder="URL"
        required
      />
      <input
        type="text"
        name="descricao"
        value={video.descricao}
        onChange={handleChange}
        placeholder="Descrição"
      />
      <input
        type="text"
        name="thumb"
        value={video.thumb}
        onChange={handleChange}
        placeholder="Thumbnail URL"
        required
      />
      <button type="submit">Add Video</button>
    </form>
  );
};

export default AddVideo;
