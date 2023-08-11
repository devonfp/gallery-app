import { NavLink } from 'react-router-dom';

const navBar = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink to="/" end>Home</NavLink></li>
      <li><NavLink to="cats">Cats</NavLink></li>
      <li><NavLink to="dogs">Dogs</NavLink></li>
      <li><NavLink to="computers">Computers</NavLink></li>
    </ul>    
  </header>
);

export default navBar;