import React from 'react';
import {Link} from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
  state = {
    activeItem: 'home',
  }

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
          name='animals'
          active={activeItem === 'animals'}
          onClick={this.handleItemClick}
        /></Link>
        <Link to={'/plants'}><Menu.Item
          name='Plants'
          active={activeItem === 'Plants'}
          onClick={this.handleItemClick}
        /></Link>
        <Link to={'/form'}><Menu.Item
          name='Add Animal or Plant'
          active={activeItem === 'Add Animal or Plant'}
          onClick={this.handleItemClick}
        /></Link>
        <Link to={'/quiz'}><Menu.Item
          name='quiz'
          active={activeItem === 'quiz'}
          onClick={this.handleItemClick}
        /></Link>
        {window.location.href === 'http://localhost:3000/' || window.location.href === 'http://localhost:3000/form' || window.location.href === 'http://localhost:3000/quiz' ? (null):(
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' name="search" value={this.props.search} onChange={this.props.changeHandler}/>
            </Menu.Item>
          </Menu.Menu>)}
      </Menu>
      </div>
    )
  }
}


export default NavBar;
