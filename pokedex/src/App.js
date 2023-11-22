import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <header className="App-header">
        <a href="https://zenith-stem-8de.notion.site/Ado-o-de-Pokemon-aa8a078f2edd4c0097e6ed3f7a59908b" target="_blank">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <a className="Link-description" href="https://zenith-stem-8de.notion.site/Ado-o-de-Pokemon-aa8a078f2edd4c0097e6ed3f7a59908b" target="_blank">
          Pokémon Adoption
        </a>
        <a
          className="App-link"
          href="https://pokeapi.co/docs/v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pokemon Api
        </a>
      </header>
    </div>
  );
}

export default App;
