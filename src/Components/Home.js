import React from 'react';
import Navbar from './Navbar';
import Text from './Text';
import Email from './Email';
import Footer from './Footer';
import Second_Page from './Second_page';

// import './Home.css'; // Make sure the path is correct

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-wrapper">
        <Navbar />
        <Text />
        <Email />
        <Footer />
        <Second_Page />
      </div>
    </div>
  );
}

export default Home;
