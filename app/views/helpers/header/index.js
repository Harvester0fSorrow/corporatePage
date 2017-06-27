import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './header.scss';

const Header = ({ selectedOption }) =>
  <div className="header">
    <img className="dude-glasses" src='/glasses1.png' alt='glasses1'/>
    <div className="menu">
      <Link to="/" key='home' ><div className={ selectedOption === 'home' ? 'option selected' : 'option' } id='home' key='homeLabel'>Home</div></Link>
      <Link to="/About" key='about' ><div className={ selectedOption === 'about' ? 'option selected' : 'option' } id='about' key='aboutLabel'>About</div></Link>
    </div>
  </div>;

Header.propTypes = {
  selectedOption: PropTypes.string,
};

Header.defaultProps = {
  selectedOption: 'home',
};

export default Header;
