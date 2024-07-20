import React from 'react';
import Plot from "../Assets/Interns_Plot2.png";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SecondPage = () => {
  return (
    <div>  {/* All content is now wrapped in a single div */}
      <div className='second-page-title-container'>
        <h2 className='second-page-title'>Land your dream role.</h2>
      </div>

      <div className='second-page-text-container'>
        <h3 className='second-page-text'>
          Every company’s internship recruitment process is different. 
          With our software, seamlessly track open opportunities and gain smart insights during each application phase.
        </h3>
        <div className='image-container'>
          <img src={Plot} alt='Plot' className='plot'/>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
