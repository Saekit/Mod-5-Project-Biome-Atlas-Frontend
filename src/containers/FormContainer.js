import React, { Component } from 'react';
import AddAnimalForm from '../components/AddAnimalForm'
import AddPlantForm from '../components/AddPlantForm'

class FormContainer extends Component {
  render(){
    return(
      <div>
        <h1>Form</h1>
        <AddAnimalForm />
        <AddPlantForm />
      </div>
    )
  }
}
export default FormContainer;
