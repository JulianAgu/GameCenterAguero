import './App.css';
// Components 
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {ItemCount} from './components/ItemCount/ItemCount';

// Routing
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ItemListContainer} />
          
          <ItemListContainer greeting="Bienvenido al catalogo"/>
          <ItemCount stock='5' initial = '1' />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
