import React, { PropTypes, Component } from "react";
import { connect } from 'react-redux';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    createMarkup() {
      const { content } = this.props;

      return {__html: content};
    }

    render() {
        return (
            <div className="box" dangerouslySetInnerHTML={this.createMarkup()} />
        );
    }
}

Content.propTypes = {
    content: PropTypes.string
}

Content.defaultProps = {
    content: ''
}

export default connect()(Content)
