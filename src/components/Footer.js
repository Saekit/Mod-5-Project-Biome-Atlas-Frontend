import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

library.add(faInstagram, faLinkedin, faGithub, faMedium, faEnvelope);
const Footer = () => {
  return(
    <footer className='footer'>
    <div className='footer-icons'>

    <a href='https://www.linkedin.com/in/raquel-randall/'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>

    <a href='https://github.com/Saekit'><FontAwesomeIcon icon={faGithub} size="2x" /></a>

    <a href='https://medium.com/@raquel.sae.randall'><FontAwesomeIcon icon={faMedium} size="2x" /></a>

    <a href='https://instagram.com/adventures.in.saeland'><FontAwesomeIcon icon={faInstagram} size="2x" /></a>

    <a href='mailto:raquel.sae.randall@gmail.com'><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>

    </div>

    <div className='footer-c'>
      <p>© 2019 Biome Atlas by Raquel Randall</p>
    </div>
    </footer>
  )
}
export default Footer
