import React, { Component } from "react";

class Messenger extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { about } = this.props;
        return (
            <div className="messenger">
              <div className="title">
                <h3>Any questions? Drop me an email...</h3>
                <input placeholder="Title" type="text"/>
              </div>
              <div className="message">
                <input type="text-area"/>
              </div>
              <div className="buttons">
              </div>
            </div>
        );
    }
}

Messenger.propTypes = {
    about: React.PropTypes.object
}

export default Messenger
