import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
  render(){
    return(
      <div>
        <ul>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/animals'}><li>All Animals</li></Link>
          <Link to={'/plants'}><li>All Plants</li></Link>
        </ul>
      </div>
    )
  }
}


export default NavBar;
