import React, { PropTypes, Component } from "react";
import { connect } from 'react-redux';
import Header from '../helpers/header';
import Footer from '../helpers/footer';


const PageNotFound =  () => {
    return (
        <div>
            <Header />
            <div className="content">
                <div className="box">
                    <h3>Sorry, Page not found.</h3>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PageNotFound;
