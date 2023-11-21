import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLanguage, FaMapMarkerAlt, FaLinkedin, FaPinterest, FaTelegram } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
        <section className="footer">
          <div className='footer-row89'>
          <h1 id='ub'>uber</h1>
          <ul className="links">
          <li>
          <a href="."><p id='visit'>visit help center</p>
</a>
        </li>
          </ul>
          </div>
  <div className="footer-row">
    <div className="footer-col">
      <h4>Company</h4>
      <ul className="links">
        <li>
          <a href=".">About us
</a>
        </li>
        <li>
          <a href=".">Our offerings</a>
        </li>
        <li>
          <a href=".">Newsroom</a>
        </li>
        <li>
          <a href=".">Investors</a>
        </li>
        <li>
          <a href=".">Blog</a>
        </li>
        <li>
          <a href=".">Careers</a>
        </li>
        <li>
          <a href=".">Ai</a>
        </li>
        <li>
          <a href=".">gifta cards</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>products
</h4>
      <ul className="links">
        <li>
          <a href=".">ride</a>
        </li>
        <li>
          <a href=".">drive
</a>
        </li>
        <li>
          <a href=".">deliver</a>
        </li>
        <li>
          <a href=".">eat</a>
        </li>
        <li>
          <a href=".">uber for business</a>
        </li>
        <li>
          <a href=".">uber freight</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>global citizenship
</h4>
      <ul className="links">
        <li>
          <a href=".">safety</a>
        </li>
        <li>
          <a href=".">diviersity and inclusion</a>
        </li>
        <li>
          <a href=".">sustainability</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>travel
</h4>
      <ul className="links">
        <li>
          <a href=".">reserve
</a>
        </li>
        <li>
          <a href=".">airport</a>
        </li>
        <li>
          <a href=".">cities
</a>
        </li>
      </ul>
    </div>
  </div>
</section>

<footer className="footer365">
      <div className="social-icons">
        <a href="." className="social-icon" title="Facebook"><FaFacebook /></a>
        <a href="." className="social-icon" title="Twitter"><FaTwitter /></a>
        <a href="." className="social-icon" title="Instagram"><FaInstagram /></a>
        <a href="." className="social-icon" title="Facebook"><FaLinkedin /></a>
        <a href="." className="social-icon" title="Twitter"><FaPinterest /></a>
        <a href="." className="social-icon" title="Instagram"><FaTelegram /></a>
      </div>
      <div className="footer-actions">
        <button className="language-button" title="English"><FaLanguage /> English</button>
        <button className="location-button" title="Location"><FaMapMarkerAlt /> Location</button>
      </div>
    </footer>
    <div class="image-row-container">
    <img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg" alt="Imag 1" class="image"></img>
    <img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg" alt="Imag 2" class="image"></img>
   
  </div>
  <div className="your-component-container">
      <div className="flex-container">
      <div className="copyright"><p>© 2023 Uber Technologies Inc.</p></div>
      <div className="menu-container">
      <div className="menu-item8">privacy</div>
        <div className="menu-item8">accessibility</div>
        <div className="menu-item8">terms</div>
      </div>
      
      </div>
  
    </div>

    
    </>
  )
}

export default Footer