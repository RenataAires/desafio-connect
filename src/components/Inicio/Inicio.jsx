import styles from "./Inicio.module.scss";
import ImgInicial from "../../assets/img-tela-inicial.png"

function Inicio() {
    return (
        <section className={styles.containerTelaInicial}>
        <div>
        <h1>Projetos sociais que transformam</h1>
        <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
        </div>

        <img src="" alt="Imagem da tela inicial" />
        </section>
    );
}

export default Inicio;