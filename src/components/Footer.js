import React from 'react';
import { Button } from './Button';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to recieve our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>

        <div className='input-areas'>
          <form>
            <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
        
      </section>
      <div className='footer-links'>
      <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/vinit___24/'>Instagram</Link>
            <Link to='https://www.facebook.com/vinit.patel.5437'>Facebook</Link>
            <Link to='https://www.youtube.com/@vinitpatel7600'>Youtube</Link>
            <Link to='https://x.com/vinitpatel476'>Twitter</Link>
            <Link to='https://www.linkedin.com/in/vinit-patell'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'></div>
          <Link className='social-logo'>
            React_Demo <i className='fa-solid fa-anchor'/>
          </Link>
        </div>
        <small className='website-rights'>React_Demo Copyright 2024</small>
        <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/vinit.patel.5437'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/vinit___24/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/@vinitpatel7600'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://x.com/vinitpatel476'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/vinit-patell'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
      </section>
    </div>
  )
}

export default Footer;