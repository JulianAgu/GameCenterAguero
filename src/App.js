import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido al catalogo"/>
      <ItemCount />
    </div>
  );
}

export default App;
