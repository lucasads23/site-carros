import { Link } from "react-router-dom";

import './Style.css'

function Header() {
  return (
    <header className="center">
            <div className="barra-topo flex align-items-center justify-content-center">
                <div>
                    <img src="imagens/Vector.svg" alt="Telefone" />
                </div>
                <div>
                    <p className="TextoTopoVermelho">
                        Zadzwoń do nas!
                    </p>
                    <p className="TextoTopoBranco">
                        (21) 9 9345-2234
                    </p>
                </div>
                <div>
                    <img src="imagens/flame-svg.svg" alt="fogo" />
                </div>
                <div>
                    <p className="TextoTopoVermelho">
                        Napisz do nas e-mail!
                    </p>
                    <p className="TextoTopoBranco">
                        biuro@sexycars.pl
                    </p>
                </div>
                <div>
                        <img src="imagens/Group 10.png" alt="E-mail" />
                </div>
            </div>
            <nav id="barra-menu">
                        <Link to="/"><img id="logo-menu" src="imagens/Logo Redesign.png" alt="Logo" /></Link>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/catalogo">Catálogo</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                            <a id="redes" href="https://www.instagram.com/" rel="_blank">
                                <img src="imagens/IG.png" alt="Ícone instagram" />
                            </a>
                            <a id="redes" href="https://www.facebook.com/" rel="_blank">
                                <img src="imagens/FB.png" alt="Ícone facebook" />
                            </a>
                            <a id="redes" href="https://www.youtube.com/" rel="_blank">
                                <img src="imagens/YT.png" alt="Ícone youtube" />
                            </a>
            </nav>
    </header>
  )
}
export default Header;