import React, { PropTypes, Component } from "react";
import { connect } from 'react-redux';
import Header from '../helpers/header';
import { selector } from '../../selectors/errors'
import * as errorsActions from '../../actions/errors';


class PageNotFound extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        dispatch(errorsActions.getPageNotFoundError());
    }

    render() {
        const { pageNotFound } = this.props.errors
        return (
            <div>
                <Header />
                <div className="content">
                    <p>{pageNotFound}</p>
                </div>
            </div>
        );
    }
}

PageNotFound.propTypes = {
    errors: PropTypes.object,
    dispatch: PropTypes.func
}

export default connect(selector)(PageNotFound)
