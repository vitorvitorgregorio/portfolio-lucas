import '../sass/Footer.sass'
import { ReactComponent as Link } from "../svg/link.svg";

function Footer(){
    return (
        <footer className='footer'>
            <h3 className='footer__text'><strong>Lucas Gregorio</strong> &copy; 2023 - Todos os direitos reservados. </h3>
            <span>
                Desenvolvido com ❤️ por <a href="https://vitor-gregorio.netlify.app" target="_blank">Vitor Gregorio <Link /> </a>
            </span>
        </footer>
    )
}

export default Footer