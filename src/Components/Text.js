import React from 'react';
import Rectangle_2 from "../Assets/Rectangle 2.svg";
import ScrollButton from './ScrollButton'; //Import the ScrollButton component

const Text = () => {
  return (
    <div>
      <section id="section-1">
        <div className='big-text-container'>
          <h1 className='main-heading'> Getting an internship is hard.</h1>
          <h2 className='sub-heading'>We're here to help, FYI.</h2>
        </div>

        <div className='mission-statement-container'>
          <h3 className='mission-statement'> We’re on a mission to democratize the internship hunt. Track the process in real time and gain data-driven insights for your dream role!</h3>
        </div>

        <div className='ellipses-container'>
          <img src={Rectangle_2} alt="Ellipse" className="ellipse" />
          <img src={Rectangle_2} alt="Ellipse" className="ellipse" />
          <img src={Rectangle_2} alt="Ellipse" className="ellipse" />
          <span className='launching-soon'>Launching soon</span>
          <img src={Rectangle_2} alt="Ellipse" className="ellipse" />
          <img src={Rectangle_2} alt="Ellipse" className="ellipse" />
          <img src={Rectangle_2} alt="Ellipse" className="ellipse" />
        </div>
        <ScrollButton /> {/* Add the ScrollButton here */}
      </section>
      <section id="section-2">
        {/* Content for section 2 */}
      </section>
    </div>
  );
}

export default Text;
