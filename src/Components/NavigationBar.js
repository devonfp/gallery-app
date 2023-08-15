import { NavLink } from 'react-router-dom';

const NavigationBar = () => (
   <ul className="main-nav">
      <li><NavLink to="cats">Cats</NavLink></li>
      <li><NavLink to="dogs">Dogs</NavLink></li>
      <li><NavLink to="birds">Birds</NavLink></li>
    </ul>    
);

export default NavigationBar;