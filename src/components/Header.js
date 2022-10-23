import {ReactComponent as Logo} from '../assets/svg/Logo.svg'
import '../sass/Header.sass'
function Header(){
    return(
        <header className="header">
            <div className="container">
                <Logo />
                <nav className="header__nav">
                    <ul className="header__list"> 
                        <li className="header__item">
                            <a href="#" className="header__link"> Home </a>
                        </li>
                        <li className="header__item">
                            <a href="#" className="header__link"> Projetos </a>
                        </li>
                        <li className="header__item">
                            <a href="#" className="header__link"> Contato </a>
                        </li>
                    </ul>
                </nav>
                <div className="header__change-language">
                    <label>
                        <input type="checkbox" />
                        
                    </label>
                </div>
            </div>
        </header>
    )
};

export default Header;