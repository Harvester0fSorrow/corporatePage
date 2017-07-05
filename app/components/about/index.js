import React from 'react';
import Header from '../helpers/header';
import Footer from '../helpers/footer';

import './about.scss';

const About = () =>
  <div className="body">
    <Header selectedOption="about" />
    <div className="content">
      <div className="box">
        <img className="about-image"
          src="/the-big-lisowski.jpg"
          alt="the-big-lisowski"
        />
        <p>Hi! My name is Radosław Lisowski and I am a full stack developer.
        Don't sweat to much trying to pronounce my name, I know it's hard for an average English
        speaker. Just call me Rad like everybody else.</p>
        <p>I always had a passion for technology, so I have started studying Computer Science at
        Wroclaw University of Technology. After graduating I wanted to work with networks and system
        administration, but I quickly realised that I am much more interested in software
        development. Because of that I dusted of my programing books and started pursuing
        that exact career.</p>
        <p>I enjoy researching new technologies to stay up to date, and deliver the best software
        and user experience possible. I am mostly working with .NET Framework, Azure and React.js
        but I also worked with Java and Objective C. Lately I am working in a startup that helps
        companies to understand their customer base.</p>
        <p>Privately I&#39;m an adrenaline junkie and I enjoy downhill, mountain biking, climbing
        and other extreme sports and activities. I own a husky named Serj, so I have to stay in
        shape to keep up with him during our daily walks or rather runs. As you can see I spend a
        lot of my free time outside "enjoying" Scottish weather. And yes, you guessed it! My general
        health and immunity is excellent!</p>
      </div>
    </div>
    <Footer />
  </div>;

export default About;
