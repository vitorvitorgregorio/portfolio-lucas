import "../sass/Projetos.sass";
//images
import projeto from "../images/ImgGrande.png";
import plataforma from "../images/plataforma.png";
import omega from "../images/omega.png";
import brasildental from "../images/brasildental.png";
import voltage from "../images/voltage.png";
import start from "../images/startempreendedor.png";
import queijo from "../images/queijo-e-prosa.png";

function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <div className="projetos__first-column">
          <div className="projetos__card card--1">
            <img src={projeto} alt="" />
          </div>
          <div className="projetos__card card--2">
            <img src={plataforma} alt="" />
          </div>
          <div className="projetos__card card--3">
            <img src={omega} alt="" />
          </div>
          <div className="projetos__card card--4">
            <img src={brasildental} alt="" />
          </div>
      </div>
      <div className="projetos__second-column"> 
          <div className="projetos__card card--5">
            <img src={voltage} alt="" />
          </div>
          <div className="projetos__card card--6">
            <img src={start} alt="" />
          </div>
          <div className="projetos__card card--7">
            <img src={queijo} alt="" />
          </div>
      </div>
    </section>
  );
}

export default Projetos;
