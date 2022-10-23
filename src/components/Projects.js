import '../sass/Projects.sass'
import projeto1 from '../assets/images/projeto1.png'
function Projects(){
    return(
        <section className="projects">
            <div className="container">
                <div className="projects__cards">
                    <div className="project__card">
                        <img src={projeto1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects