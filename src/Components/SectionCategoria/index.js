import { Card } from "Components/Card";
import styles from "./SectionCategoria.module.css";
import { useEffect, useState } from "react";
import { TituloCategoria } from "Components/TituloCategoria";

export const SectionCategoria = () => {
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/videos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Video deleted");
      setVideos(Videos.filter((video) => video.id !== id)); // Remove o vídeo da lista
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const frontendCategorizados = Videos.filter(
    (video) => video.categoria === "frontend"
  );
  const backendCategorizados = Videos.filter(
    (video) => video.categoria === "backend"
  );
  const mobileCategorizados = Videos.filter(
    (video) => video.categoria === "mobile"
  );

  return (
    <section className={styles.container}>
      <section>
        <TituloCategoria color="frontend">
          <h2>Frontend</h2>
        </TituloCategoria>
        <div className={styles.container__Card}>
          {frontendCategorizados.map((video) => {
            return <Card {...video} key={video.id} onDelete={handleDelete} />;
          })}
        </div>
      </section>
      <section>
        <TituloCategoria color="backend">
          <h2>Backend</h2>
        </TituloCategoria>
        <div className={styles.container__Card}>
          {backendCategorizados.map((video) => {
            return <Card {...video} key={video.id} onDelete={handleDelete} />;
          })}
        </div>
      </section>
      <section>
        <TituloCategoria color="mobile">
          <h2>Mobile</h2>
        </TituloCategoria>
        <div className={styles.container__Card}>
          {mobileCategorizados.map((video) => {
            return <Card {...video} key={video.id} onDelete={handleDelete} />;
          })}
        </div>
      </section>
    </section>
  );
};
