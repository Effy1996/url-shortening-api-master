import React from 'react';
import brand from '../assets/images/icon-brand-recognition.svg';
import detail from '../assets/images/icon-detailed-records.svg';
import custom from '../assets/images/icon-fully-customizable.svg';

function Statistics() {
  return (
    <section id='statistics'>
      <h2>Advanced Statistics</h2>
      <h6>Track how your links are performing across the web with<br/> our 
      advanced statistics dashboard.</h6>
      <hr />
      <div className='stats-container'> 
        <div className='stats-info'>
          <div className="stats-img">
            <img src={brand} alt="icon brand recognition" />
          </div>
            <h5>Brand Recognition</h5>
            <p>Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div className='stats-info'>
          <div className="stats-img">
            <img src={detail} alt="icon detailed records" />
          </div>
            <h5>Detailed Records</h5>
            <p>Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.</p>
        </div>
        <div className='stats-info'>
          <div className="stats-img">
            <img src={custom} alt="icon fully customizable" />
          </div>
            <h5>Fully Customizable</h5>
            <p>Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement.</p>
        </div>
      </div>
    </section>
  )
}

export default Statistics;
