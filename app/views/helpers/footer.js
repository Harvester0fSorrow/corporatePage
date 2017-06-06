import React, { Component } from "react";
import { connect } from 'react-redux';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                © The Big Lisowski {new Date().getFullYear()}
            </div>
        );
    }
}

Footer.propTypes = {
    metaData: React.PropTypes.object,
    dispatch: React.PropTypes.func
}

export default Footer
