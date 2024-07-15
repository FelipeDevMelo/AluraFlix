import { Card } from "Components/Card";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
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

export const Carroussel = () => {
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);
  const frontendCategorizados = Videos.filter(
    (video) => video.categoria === "frontend"
  );
  return (
    <div>
      <Carousel
        itemClass="carousel-item"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
        infinite={true}
        responsive={responsive}
      >
        {frontendCategorizados.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </Carousel>
    </div>
  );
};
