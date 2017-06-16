import React from 'react';
import Header from '../helpers/header';
import Footer from '../helpers/footer';

import './home.scss';

const Home = () =>
  <div className="body">
    <Header />
    <div className="content">
      <div className="box">
        <h3>Welcome!</h3>
        <p>This page is under constant construction, that would be one of the reasons why there is
        almost no content in here... The other would be me focusing all the time at the react and
        web api.</p>
        <p>I have started working on this page cause I needed a playground for home projects.
        Curently the website is contructed with a React client side, that consumes ASP.Net WebAPI.
        The small amount of data that needs to be stored is in azure table storage.</p>
        <p>I plan to add blog to describe everything in depth and hopefully somebody will find it
        useful or at least correct... </p>
      </div>
    </div>
    <Footer />
  </div>;

export default Home;
