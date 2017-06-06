import React, { Component } from "react";
import { connect } from 'react-redux';
import * as homeActions from '../../actions/home';
import { selector } from '../../selectors/home'
import Header from '../helpers/header';
import Footer from '../helpers/footer';
import Content from '../helpers/content';

class Home extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        dispatch(homeActions.getHomeContent());
    }

    render() {
        const { home } = this.props;
        return (
            <div className="body">
              <Header />
              <div className="content">
                <Content content={home.content} />
              </div>
            </div>
        );
    }
}

Home.propTypes = {
    home: React.PropTypes.object,
    dispatch: React.PropTypes.func
}

export default connect(selector)(Home)
