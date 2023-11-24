import logo from './../../logo.svg';
import './styles.css'

const Home = () => {  
    return (
          <div className="Home">
            <header className="Home-header">
              <a href="https://zenith-stem-8de.notion.site/Ado-o-de-Pokemon-aa8a078f2edd4c0097e6ed3f7a59908b" target="_blank" rel="noreferrer">
                <img src={logo} className="Home-logo" alt="logo pokebola" />
              </a>
              <a className="Link-description" href="https://zenith-stem-8de.notion.site/Ado-o-de-Pokemon-aa8a078f2edd4c0097e6ed3f7a59908b" target="_blank" rel="noreferrer">
                Pokémon Adoption
              </a>
              <a
                className="Home-link"
                href="https://pokeapi.co/docs/v2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pokemon Api
              </a>
            </header>
          </div>
        );
  };
  
  export default Home;