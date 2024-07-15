import { useEffect, useState } from "react";
import { Card } from "Components/Card";
import { TituloCategoria } from "Components/TituloCategoria";
import { EditVideoModal } from "Components/EditModal";
import Carousel from "react-multi-carousel";
import styles from "./SectionCategoria.module.css";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const SectionCategoria = () => {
  const [videos, setVideos] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editVideo, setEditVideo] = useState(null);

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
      setVideos(videos.filter((video) => video.id !== id));
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const openEditModal = (videoToEdit) => {
    setEditVideo(videoToEdit);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditVideo(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditVideo({
      ...editVideo,
      [name]: value,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/videos/${editVideo.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editVideo),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Video edited:", data);
      setVideos(
        videos.map((video) => (video.id === editVideo.id ? editVideo : video))
      );
      closeEditModal();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const frontendCategorizados = videos.filter(
    (video) => video.categoria === "frontend"
  );
  const backendCategorizados = videos.filter(
    (video) => video.categoria === "backend"
  );
  const mobileCategorizados = videos.filter(
    (video) => video.categoria === "mobile"
  );

  return (
    <section className={styles.container}>
      <section>
        <TituloCategoria color="frontend">
          <h2>Frontend</h2>
        </TituloCategoria>
        <div className={styles.container__Card}>
          <Carousel
            itemClass={styles.carouseuItem}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots={true}
            infinite={true}
            responsive={responsive}
          >
            {frontendCategorizados.map((video) => (
              <Card
                {...video}
                key={video.id}
                onDelete={handleDelete}
                onEdit={openEditModal}
              />
            ))}
          </Carousel>
        </div>
      </section>
      <section>
        <TituloCategoria color="backend">
          <h2>Backend</h2>
        </TituloCategoria>
        <div className={styles.container__Card}>
          <Carousel
            itemClass={styles.carouseuItem}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots={true}
            infinite={true}
            responsive={responsive}
          >
            {backendCategorizados.map((video) => (
              <Card
                {...video}
                key={video.id}
                onDelete={handleDelete}
                onEdit={openEditModal}
              />
            ))}
          </Carousel>
        </div>
      </section>
      <section>
        <TituloCategoria color="mobile">
          <h2>Mobile</h2>
        </TituloCategoria>
        <div className={styles.container__Card}>
          <Carousel
            itemClass={styles.carouseuItem}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots={true}
            infinite={true}
            responsive={responsive}
          >
            {mobileCategorizados.map((video) => (
              <Card
                {...video}
                key={video.id}
                onDelete={handleDelete}
                onEdit={openEditModal}
              />
            ))}
          </Carousel>
        </div>
      </section>

      {editVideo && (
        <EditVideoModal
          isOpen={isEditModalOpen}
          video={editVideo}
          onRequestClose={closeEditModal}
          onChange={handleEditChange}
          onSubmit={handleEditSubmit}
        />
      )}
    </section>
  );
};
