import Logo from "../../assets/logo.png";
import Whatsapp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer>
      <div>
        <img src={Logo} alt="Logo da connect" />
        <h2>Connect</h2>
      </div>

      <p>
        © 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto
        destinado exclusivamente a fins educativos.
      </p>

      <nav className={styles.navFooter}>
        <img src={Whatsapp} alt="Logo do whatsapp" />
        <img src={Instagram} alt="Logo do instagram" />
        <img src={Linkedin} alt="Logo do linkedin" />
      </nav>
    </footer>
  );
}
export default Footer;
