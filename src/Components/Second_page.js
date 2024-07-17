import React from 'react';
import Phone_Logo from "../Assets/Phone_Screen_Logo.png";
import OA_Logo from "../Assets/OA_Logo.png";
import Interview_Logo from "../Assets/Interview_Logo.png";
import Offer_Logo from "../Assets/Offer_Logo.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Second_Page = () => {
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
      </div>

      <div className='rectangle-container'>
        <div className='image-container'>
          <img src={OA_Logo} alt='OA' className='phone'/>
          <div className='special-spacing'></div>
          <div className='image-text-container'>
            <h3 className='image-text'>10 People Reported Phone Screen</h3>
            <h3 className='image-text'>2 Comments Noted</h3>
          </div>
        </div>
        
        <div className='image-container'>
          <img src={Phone_Logo} alt='Phone' className='oa'/>
          <div className='image-text-container'>
            <h3 className='image-text'>25 People Reported OA</h3>
            <h3 className='image-text'>1 Comment Noted</h3>
          </div>
        </div>
        
        <div className='image-container'>
          <img src={Interview_Logo} alt='Interview' className='interview'/>
          <div className='special-spacing-2'></div>
          <div className='image-text-container'>
            <h3 className='image-text'>5 People Reported Interview</h3>
            <h3 className='image-text'>3 Comments Noted</h3>
          </div>
        </div>
        
        <div className='image-container'>
          <img src={Offer_Logo} alt='Offer' className='offer'/>
          <div className='image-text-container'>
            <h3 className='image-text'>2 People Reported Offer</h3>
            <h3 className='image-text'>0 Comments Noted</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second_Page;
