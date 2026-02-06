import React from "react";
import styles from "./Perfil.module.scss";
import ImgPerfil from "../../assets/FotoDePerfil.png"

function Perfil() {
  return (
    <section className={styles.containerTelaPerfil}>
      <article>
        <img src={ImgPerfil} alt="Foto de perfil" />

        <div className={styles.cardInfo}>
          <h2>Renata Aires</h2>
          <h3>Desenvolvedora Front-end</h3>
          <p className={styles.paragrafoSobreMim}>
            Profissional com experiência em desenvolvimento web e design
            responsivo.
          </p>

          <address>
            <p>Goiânia, Goiás</p>
            <p>renataaires8332@gmail.com</p>
          </address>
        </div>

        <ul className={styles.listaInteresses}>
          <li>Educação</li>
          <li>Experiência</li>
          <li>Habilidades</li>
          <li>Projetos</li>
        </ul>
      </article>
    </section>
  );
}

export default Perfil;
