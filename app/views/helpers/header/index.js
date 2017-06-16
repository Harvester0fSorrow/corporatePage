import React, { PropTypes, Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router'

import './header.scss';

const Header = ({selectedOption}) => {
    return (
        <div className="header">
            <img className="dude-glasses" src='http://corporatepage.blob.core.windows.net/blob/glasses1.png' alt='glasses1'/>
            <div className="menu">
                <Link to="/" key='home' ><div className={'home' === selectedOption ? 'option selected' : 'option' } id='home' key='homeLabel'>Home</div></Link>
                <Link to="/About" key='about' ><div className={'about' === selectedOption ? 'option selected' : 'option' } id='about' key='aboutLabel'>About</div></Link>
            </div>
        </div>
    );
}

Header.propTypes = {
    selectedOption: PropTypes.string
}

Header.defaultProps = {
    selectedOption: 'home'
}

export default Header
