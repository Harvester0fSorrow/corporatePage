import React, { PropTypes, Component } from "react";
import { connect } from 'react-redux';
import * as blogActions from '../../actions/blog';
import { selector } from '../../selectors/blog'
import Header from '../helpers/header';
import Content from '../helpers/content';

class Blog extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        dispatch(blogActions.getBlogContent());
    }

    render() {
        const { blog } = this.props;
        return (
            <div>
              <Header />
              <div className="content">
                <Content content={blog.content}/>
              </div>
            </div>
        );
    }
}

Blog.propTypes = {
  blog: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(selector)(Blog)
