import React from 'react';
import './styles.css';

const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
            <li className="menu-item">
                <a href="/" className="menu-link">
                    Home
                </a>
            </li>
            <li className="menu-item">
                <a href="/pokedex" className="menu-link">
                    Pokedex
                </a>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;