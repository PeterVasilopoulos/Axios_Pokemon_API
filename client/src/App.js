import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AxiosPokemon from "./components/AxiosPokemon";

function App() {
  return (
    <div className="App">
      <h1>Pokemon Fetcher</h1>
      <AxiosPokemon />
    </div>
  );
}

export default App;