import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react'

const options = [
  { key: 'a', text: 'Aquatic', value: 'Aquatic' },
  { key: 'tu', text: 'Tundra', value: 'Tundra' },
  { key: 'dt', text: 'Desert', value: 'Desert' },
  { key: 'r', text: 'Rainforest', value: 'Rainforest' },
  { key: 'g', text: 'Grasslands', value: 'Grasslands' },
  { key: 'ta', text: 'Taiga', value: 'Taiga' },
  { key: 'de', text: 'Deciduous Forest', value: 'Deciduous Forest' }
]

class AddPlantForm extends Component {

  state = {
    species: "",
    size: "",
    predators: "",
    location: "",
    seed_distribution: "",
    other_info: "",
    image: "",
    biome_id: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(

      <Form className="plant-form" onSubmit={""} >
        <h1>Add Plant</h1>

        <Form.Field>
          <Form.Select name="biome_id" fluid label='Biome' options={options} placeholder='Biome' onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Species</label>
          <input type="text" name="species" placeholder="species" value={this.state.species} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
        <label>Size</label>
        <input type="text" name="size" placeholder="size" value={this.state.size} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
        <label>Predators</label>
        <input type="text" name="predators" placeholder="predators" value={this.state.predators} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
        <label>Location</label>
        <input type="text" name="location" placeholder="location" value={this.state.location} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Seed Distribution</label>
          <input type="text" name="seed_distribution" placeholder="Seed Distribution" value={this.state.seed_distribution} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
        <label>Interesting Fact</label>
        <textarea name="other_info" placeholder="Facts" value={this.state.other_info} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Image</label>
          <input type="text" name="image" placeholder="image" value={this.state.image} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field control={Button}>Submit</Form.Field>

      </Form>
    )
  }
}
export default AddPlantForm;
