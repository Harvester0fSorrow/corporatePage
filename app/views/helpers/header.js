import React, { Component } from "react";
import { connect } from 'react-redux';
import * as metaDataActions from '../../actions/metaData';
import { selector } from '../../selectors/header';
import { Link } from 'react-router'

class Header extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        this.selectOption = this.selectOption.bind(this);
        dispatch(metaDataActions.getMenu());
    }

    selectOption(e){
        const { dispatch } = this.props;
        if(e.target.id!== undefined) {
            dispatch(metaDataActions.selectMenuOption(e.target.id));
        }
    }

    renderMenuItems() {
        const { metaData } = this.props;
        const { menuOptions } = metaData;
        let lastMenuOption = menuOptions[menuOptions.length-1];
        return menuOptions.map(menuOption => {
            return (<Link to={menuOption.url} onClick={this.selectOption} key={menuOption.label+'label'} ><div className={menuOption.label === metaData.selectedOption ? 'option selected' : 'option' } id={menuOption.label} key={menuOption.label}>{menuOption.label}</div></Link>);
        });
    }

    render() {
        return (
            <div className="header">
                <img className="dude-glasses" src='http://corporatepage.blob.core.windows.net/blob/glasses1.png' alt='glasses1'/>
                <div className="menu">
                    {this.renderMenuItems()}
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    metaData: React.PropTypes.object,
    dispatch: React.PropTypes.func
}

export default connect(selector)(Header)
