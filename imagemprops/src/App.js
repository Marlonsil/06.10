import Noticia from './components/Noticia';
import Img from './img/es.gif'
import './App.css';

function App() {
  return (
    <div className="App">
    <h1 className="titulo">Imagem</h1>
    <Noticia
    titulo="Chuva de meteoros"
    imagem={Img}
    alt="Marlon"
    descricao="Uma chuva de meteoros caem todo o brasil, dando para ver em coquer lugar."
    categorria="Beleza naturais"
    />
    </div>
  );
}
export default App;
