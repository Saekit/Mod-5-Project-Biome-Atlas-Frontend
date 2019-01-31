import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
  render(){
    return(
      <div>
        <ul>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/biome'}><li>Biomes</li></Link>
        </ul>
      </div>
    )
  }
}


export default NavBar;
