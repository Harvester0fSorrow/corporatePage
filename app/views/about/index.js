import React, { Component } from "react";
import { connect } from 'react-redux';
import Header from '../helpers/header';
import Content from '../helpers/content';
import MessageBox from '../helpers/messageBox'
import * as aboutActions from '../../actions/about';
import Footer from '../helpers/footer';
import Messenger from '../helpers/messenger';
import { selector } from '../../selectors/about'

class About extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        dispatch(aboutActions.getAboutContent());
    }

    render() {
        const { about } = this.props;
        return (
            <div className="body">
              <Header />
                <div className="content">
                  <Content content={about.content}/>
                  <Messenger />
                </div>
              <Footer />
            </div>
        );
    }
}

About.propTypes = {
    about: React.PropTypes.object,
    dispatch: React.PropTypes.func
}

export default connect(selector)(About)
