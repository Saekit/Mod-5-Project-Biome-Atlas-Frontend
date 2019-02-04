import React from 'react';
import AnimalContainer from '../containers/AnimalContainer'
import PlantContainer from '../containers/PlantContainer'
import { Accordion, Icon, Segment, Image } from 'semantic-ui-react'


class BiomeCard extends React.Component {
  state = {
    activeIndex: 0,
    animal: false
  }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
    }


  animalHandler = () => {
    let click = this.state.animal
    this.setState({
      animal: !click
    })
  }

  plantHandler = () => {
    let click = this.state.plant
    this.setState({
      plant: !click
    })
  }

  render(){
    const { activeIndex } = this.state
    let biome = this.props.biome
    return(
      <Segment>
         <Image src={biome.image} size='huge' centered />

      <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Biome
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            {biome.biome_name}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Ecosystems
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            {biome.ecosystems}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Temperature Range
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            {biome.temp_range}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Biodiversity
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            {biome.biodiversity}
          </p>
        </Accordion.Content>
      </Accordion>
      <button onClick={this.animalHandler}>Animals</button>
      <button onClick={this.plantHandler}>Plants</button>
      {this.state.animal ? <AnimalContainer animals={this.props.animals} /> : null}
      {this.state.plant ? <PlantContainer plants={this.props.plants} /> : null}
      </Segment>
    )
  }
}


export default BiomeCard;
