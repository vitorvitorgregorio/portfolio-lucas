import {ReactComponent as Behance} from '../assets/svg/behance.svg'
import {ReactComponent as Linkedin} from '../assets/svg/linkedin.svg'
import {ReactComponent as Dribble} from '../assets/svg/dribble.svg'
import '../sass/Contact.sass'

function Contact(){
    return(
        <section className="contact">
            <div className="container">
                <nav className="contact__nav">
                    <ul>
                        <li>
                            <a href="">
                                <Dribble />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Linkedin />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Behance />
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="contact__description">
                    <h2>Me dê um alô 👋 e vamos trocar ideias e experiências. Você pode me encontrar nas redes ai em cima, ou me mandar um e-mail no <strong><a href="mailto:lucas.lucone13@gmail.com">lucas.lucone13@gmail.com</a></strong></h2>
                </div>
            </div>
        </section>
    )
}

export default Contact