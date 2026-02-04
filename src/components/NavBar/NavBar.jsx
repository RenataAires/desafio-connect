import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importando todos os componentes para serem usaddos nas rotas
import Inicio from "../Inicio/Inicio";
import Acoes from "../AcoesDaConnect/AcoesDaConnect";

import Logo from "../../assets/logo.png";
import FotoDoPerfil from "../../assets/foto-perfil.png";

importstyles from "./NavBar.module.scss";

function NavBar() {
  return (
    <BrowserRouter>
      <nav className={styles.navBar}>
        <link to="/">
          <img src={Logo} alt="Logo" />
        </link>

        <ul>
          <li>
            {" "}
            <link to="/">Início</link>
          </li>

          <li>
            {" "}
            <link to="/acoes">Ações da Connect</link>
          </li>

          <li>
            <link to="/quemsomos">Quem Somos</link>
          </li>
        </ul>

        <link to="/perfil">
          <img className={styles.imgPerfil} src={FotoDoPerfil} alt="Foto do Perfil" />
        </link>
      </nav>

      <Routes>
        <Route element={<Inicio />} />
        <Route element={<Acoes />} />
        <Route element={<QuemSomos />} />
        <Route element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;
