import React from 'react';
import Navbar from './Navbar';
import Text from './Text';
import Email from './Email';
import Footer from './Footer';
import Second_Page from './Second_page';
// import Infinite from '.Infinite';
// import Infinite from './Infinite'; // Ensure this path is correct

import Vector_12 from "../Assets/Vector 12.svg";
import Vector_13 from "../Assets/Vector 13.svg";
import Vector_14 from "../Assets/Vector 14.svg";
import background from "../Assets/MacBook Air - 47.svg"

const Home = () => {
  return (
    <div className="background-wrapper">
      <Navbar />
      <Text />
      <Email />
      <Footer />
      <Second_Page/>
      <img src={Vector_12} alt="Background" className="background-image-vec1" />
      <img src={Vector_13} alt="Background" className="background-image-vec2" />
      <img src={Vector_14} alt="Background" className="background-image-vec3" />
      {/* <img src={background}alt="Background" className='total-background'/> */}
    </div>
  );
}

export default Home;
