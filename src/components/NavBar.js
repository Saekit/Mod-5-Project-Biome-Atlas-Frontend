import React from 'react';
import {Link} from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return(
      <div>
      <Menu pointing>
        <Link to={'/'}><Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          /></Link>
        <Link to={'/animals'}><Menu.Item
          name='Animals'
          active={activeItem === 'animals'}
          onClick={this.handleItemClick}
        /></Link>
        <Link to={'/plants'}><Menu.Item
          name='Plants'
          active={activeItem === 'plants'}
          onClick={this.handleItemClick}
        /></Link>
        <Link to={'/form'}><Menu.Item
          name='Add Animal or Plant'
          active={activeItem === 'form'}
          onClick={this.handleItemClick}
        /></Link>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}


export default NavBar;
