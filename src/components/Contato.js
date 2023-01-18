import '../sass/Contato.sass'
//svg
import {ReactComponent as Linkedin} from "../svg/linkedin.svg"
import {ReactComponent as Dribble} from "../svg/dribble.svg"
import {ReactComponent as Behance} from "../svg/behance.svg"

function Contato(){
    return(
        <section className="contato" id='contato'>
            <ul className="contato__socialList">
                <li>
                    <Linkedin className='socialList__icon'/>
                </li>
                <li>
                    <Dribble className='socialList__icon'/>
                </li>
                <li>
                    <Behance className='socialList__icon'/>
                </li>
            </ul>
            <h2 className='contato__text'>Me dê um alô 👋 e vamos trocar ideias e experiências. Você pode me encontrar nas redes ai em cima, ou me mandar um e-mail no <strong><a href="mailto:lucas.lucone13@gmail.com">lucas.lucone13@gmail.com</a></strong></h2>
        </section>
    )
}


export default Contato