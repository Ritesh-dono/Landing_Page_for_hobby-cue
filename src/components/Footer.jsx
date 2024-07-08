import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FaArrowDown, FaArrowUp, FaEnvelope, FaFacebook, FaGoogle, FaInstagram, FaPinterest, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [activeSections, setActiveSections] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSection = (section) => {
    setActiveSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const scrollToDirection = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const currentPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollDirection === 'down' && currentPosition + window.innerHeight < scrollHeight) {
      window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      });
      setScrollDirection('up');
    } else if (scrollDirection === 'up' && currentPosition > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setScrollDirection('down');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main-content">
      <div className="f1 m-0">
        <h2 className="heading-margin d-flex ">
          <span className="hoby">Your <span style={{color:"#8064A2"}}>hobby</span>, Your <span style={{color:"#0096C8"}}>Community</span></span>
        </h2>
        <span className="ms-5"><button type="button" className="btn btn-primary ms-3">Get Started</button></span>
        <img src="ogg.png" alt="" className='imgl'/>
      </div>
      <div className="footer">
        <div className="container">
          <div className="footer-section">
            <button className="scroll-btn rounded-circle" onClick={scrollToDirection}>
              {scrollDirection === 'down' ? <FaArrowDown /> : <FaArrowUp />}
            </button>

            <h4 onClick={() => isMobile && toggleSection('section1')}><b>Hobbycue</b></h4>
            <ul className={isMobile && !activeSections['section1'] ? '' : 'open'}>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 onClick={() => isMobile && toggleSection('section2')}><b>How Do I</b></h4>
            <ul className={isMobile && !activeSections['section2'] ? '' : 'open'}>
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 onClick={() => isMobile && toggleSection('section3')}><b>Quick Links</b></h4>
            <ul className={isMobile && !activeSections['section3'] ? '' : 'open'}>
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Shop / Store</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 onClick={() => isMobile && toggleSection('section4')}><b>Social Media</b></h4>
            <ul className={`social-media ${isMobile && !activeSections['section4'] ? '' : 'open'}`}>
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaPinterest /></a></li>
              <li><a href="#"><FaGoogle /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
              <li><a href="#"><FaTelegram /></a></li>
              <li><a href="#"><FaEnvelope /></a></li>
            </ul>
            <h4>Invite Friends</h4>
            <div className="invite-friends">
              <input type="email" placeholder="Email ID" />
              <button>Invite</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-bottom">
        <p>© Purple Cues Private Limited</p>
      </footer>
    </div>
  );
}

export default Footer;
