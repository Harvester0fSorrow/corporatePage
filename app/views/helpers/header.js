import React, { PropTypes, Component } from "react";
import { connect } from 'react-redux';
import * as metaDataActions from '../../actions/metaData';
import { selector } from '../../selectors/header';
import { Link } from 'react-router'

class Header extends Component {
    constructor(props) {
        super(props);
        this.selectOption = this.selectOption.bind(this);
    }

    selectOption(e){
        const { dispatch } = this.props;
        if(e.target.id!== undefined) {
            dispatch(metaDataActions.selectMenuOption(e.target.id));
        }
    }

    render() {
        const { metaData } = this.props;
        return (
            <div className="header">
                <img className="dude-glasses" src='http://corporatepage.blob.core.windows.net/blob/glasses1.png' alt='glasses1'/>
                <div className="menu">
                    <Link to="/" onClick={this.selectOption} key='home' ><div className={'home' === metaData.selectedOption ? 'option selected' : 'option' } id='home' key='homeLabel'>Home</div></Link>
                    <Link to="/About" onClick={this.selectOption} key='about' ><div className={'about' === metaData.selectedOption ? 'option selected' : 'option' } id='about' key='aboutLabel'>About</div></Link>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    metaData: PropTypes.object,
    dispatch: PropTypes.func
}

export default connect(selector)(Header)
