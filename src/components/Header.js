import { ReactComponent as LogoDesktop } from "../svg/logo-desktop.svg";
import { ReactComponent as LogoMobile } from "../svg/logo-mobile.svg";
import '../sass/Header.sass'
function Header() {
  return (
    <header className="header">
      <nav className="header__navigation">
        <div>
            <LogoDesktop className="logo-desktop"/>
            <LogoMobile className="logo-mobile"/>
        </div>
        <ul className="navigation__list">
          <li>
            <a href="#sobre" className="navigation__link active">Sobre</a>
          </li>
          <li>
            <a href="#projetos" className="navigation__link">Projetos</a>
          </li>
          <li>
            <a href="#contato" className="navigation__link">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
