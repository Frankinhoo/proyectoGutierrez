import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBarjs/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = {"Productos"} />
    </div>
  );
}

export default App;
