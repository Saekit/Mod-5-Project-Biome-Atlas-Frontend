import React, { Component } from 'react';
import AddAnimalForm from '../components/AddAnimalForm'
import AddPlantForm from '../components/AddPlantForm'
import { Divider, Grid, Segment } from 'semantic-ui-react'

class FormContainer extends Component {
  render(){
    return(
      <Segment className="forms">
        <Grid columns={2} relaxed='very' stackable>
           <Grid.Column>
            <AddAnimalForm />
          </Grid.Column>
          <Grid.Column>
            <AddPlantForm />
          </Grid.Column>
        </Grid>
        <Divider vertical>OR</Divider>
      </Segment>
    )
  }
}
export default FormContainer;
