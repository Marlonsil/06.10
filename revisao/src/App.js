import './App.css';
import Imagem from './img/toro.jpg';
import NoticiaComponente from './comp/Noticia';
function App() {
  return (
    <div className="App">
    <h1>Minha primeira noticia</h1>
   <NoticiaComponente
  titulo="um titulo "
   imagem={Imagem}
   descricao="Descrição breve da noticia "
   categoria="anotação"
 />
    
  

    </div>
  );
}

export default App;
