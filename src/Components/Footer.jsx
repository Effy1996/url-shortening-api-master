import React from 'react';
import logo from '../assets/images/logo.svg';
import facebook from '../assets/images/icon-facebook.svg';
import instagram from '../assets/images/icon-instagram.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <h2>Shortly</h2>
        <div className='links-container'>
          <div className="links">
            <div className='linkables'>
                <h6>Features</h6>
                <ul>
                    <li><a href="">Link Shortening</a></li>
                    <li><a href="">Branded Links</a></li>
                    <li><a href="">Analytics</a></li>
                </ul>
            </div>
            <div className='linkables'> 
                <h6> Resources</h6>
                <ul>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Developers</a></li>
                    <li><a href="">Support</a></li>
                </ul>
            </div>
            <div className='linkables'>
                <h6>Company</h6>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Our Team</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className='socials'>
              <a href=""><img src={facebook} alt="" /></a>
              <a href=""><img src={twitter} alt="" /></a>
              <a href=""><img src={pinterest} alt="" /></a>
              <a href=""><img src={instagram} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
