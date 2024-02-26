import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/homeBackground.jpg'
import '../styles/Home.css'

function  Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer">
          <h1>DJs Custom Interiors</h1>
          <p>We design and build beautiful homes</p>
          <Link to={'/contact'}>
              <button>Contact Us</button>
          </Link>
      </div>
    </div>
  );
}

export default Home;
