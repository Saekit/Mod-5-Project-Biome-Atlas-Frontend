import React from 'react';
import { Icon } from 'semantic-ui-react'

const AboutContainer = () => {
  return(
    <div raised className="about-page">
    <h1 className='about-header'>About Biome Atlas</h1>
      <p>Biome Atlas was designed to teach children about the seven environmental biomes on Earth, including the animals and vegetation that inhabit them.</p>
      <p>Utilizing a custom Rails json API, the backend database was built to securely store and send information of biomes, animals, and plants.</p>
      <p>Implemented React and Redux to handled over 10 states, created 8 routes, and passed information between over 25 components.</p>
      <p>Designed user interface, slider, and forms with Semantic UI React, custom CSS, and React Transition Group.</p>
      <p>Used react library Strider to create an interactive quiz.</p>
      <a className="icons" href='https://www.linkedin.com/in/raquel-randall-044ab515/'><Icon size='large' circular link name='linkedin' /></a>
      <a className="icons" href='https://github.com/Saekit'><Icon size='large' circular link name='github' /></a>
    </div>
  )
}
export default AboutContainer
