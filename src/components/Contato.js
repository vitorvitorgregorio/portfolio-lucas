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
                    <a className='socialList__link' href="https://www.linkedin.com/in/lucas-gregorio/" target='_blank' title="Conecte-se Lucas Gregorio no Linkedin">
                        <Linkedin className='socialList__icon'/>
                    </a>
                </li>
                <li>
                    <a className='socialList__link' href="https://www.behance.net/lucasgregorio" target='blank' title="Siga Lucas Gregorio no Behance">
                        <Dribble className='socialList__icon'/>
                    </a>
                </li>
                <li>
                    <a className='socialList__link' href="https://dribbble.com/lucasgregorio" target='_blank' title="Siga Lucas Gregorio No Dribble">
                        <Behance className='socialList__icon' />
                    </a>
                </li>
            </ul>
            <h2 className='contato__text'>Me dê um alô 👋 e vamos trocar ideias e experiências. Você pode me encontrar nas redes ai em cima, ou me mandar um e-mail no <strong><a href="mailto:lucas.lucone13@gmail.com">lucas.lucone13@gmail.com</a></strong></h2>
        </section>
    )
}


export default Contato