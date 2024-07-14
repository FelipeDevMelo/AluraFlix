import { React } from "react";
import styles from "./Hero.module.css";
import banner from "./player.png";
import TagTitle from "./TitleCategory.png";
export const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.div1}>
        <img src={TagTitle} alt="titulo front end" />
        <h1>SEO com React</h1>
        <p>
          Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar
          uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas
          dicas sobre performance e de quebra conhecer uma plataforma
          sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse
          vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!{" "}
        </p>
      </div>
      <img className={styles.banner} src={banner} alt="imagem do video" />
    </section>
  );
};
