import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'



class AddAnimalForm extends Component {

  state = {
    species: "",
    lifespan: "",
    size: "",
    prey: "",
    predators: "",
    location: "",
    other_info: "",
    image: "",
    endangered: false,
    biome_id: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render(){
    const options = [
      { key: 'a', text: 'Aquatic', value: {this.state.biome_id} },
      { key: 'tu', text: 'Tundra', value: {this.state.biome_id} },
      { key: 'dt', text: 'Desert', value: {this.state.biome_id} },
      { key: 'r', text: 'Rainforest', value: {this.state.biome_id} },
      { key: 'g', text: 'Grasslands', value: {this.state.biome_id} },
      { key: 'ta', text: 'Taiga', value: {this.state.biome_id} },
      { key: 'de', text: 'Deciduous Forest', value: {this.state.biome_id} }
    ]
    return(
      <Form className="animal-form" onSubmit={this.submitHandler} >
        <h1>Add Animal Form</h1>

        <Form.Field>
          <Form.Select fluid name="biome_id" label='Biome' options={options} placeholder='Biome' onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Species</label>
          <input type="text" name="species" placeholder="species" value={this.state.species} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Lifespan</label>
          <input type="text" name="lifespan" placeholder="lifespan" value={this.state.lifespan} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Size</label>
          <input type="text" name="size" placeholder="size" value={this.state.size} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Prey</label>
          <input type="text" name="prey" placeholder="prey" value={this.state.prey} onChange={this.changeHandler} />
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
          <label>Image</label>
          <input type="text" name="image" placeholder="image" value={this.state.image} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Endangered</label>
          True: <input type="radio" name="endangered" value={this.state.endangered} checked={this.state.endangered === true} onChange={this.changeHandler} /> |
          False: <input type="radio" name="endangered" value={this.state.endangered} checked={this.state.endangered === false} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field>
          <label>Interesting Fact</label>
          <textarea name="other_info" placeholder="Facts" value={this.state.other_info} onChange={this.changeHandler} />
        </Form.Field>

        <Form.Field control={Button}>Submit</Form.Field>

      </Form>
    )
  }
}
export default AddAnimalForm;
