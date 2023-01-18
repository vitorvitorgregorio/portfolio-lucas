import Contato from './components/Contato';
import Footer from './components/Footer';
import Header from './components/Header';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';
import './sass/Global.sass'


function App() {
  return (
    <div className="App">
      <Header />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
