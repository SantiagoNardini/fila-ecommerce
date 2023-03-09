import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/NavBar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Hola mundo"}/>
    </div>
  );
}

export default App;
