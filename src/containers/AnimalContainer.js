import React from "react";
import AnimalCard from "../components/AnimalCard";

class AnimalContainer extends React.Component {

  filteredAnimal = () => {
    let filteredAnimal = this.props.animals.filter(animal =>
        animal.species.toLowerCase().includes(this.props.search.toLowerCase())
      ).map(animal => <AnimalCard className="animal-list" key={animal.id} animal={animal} />)
      return filteredAnimal
  }

  animal = () => {
    let animal = this.props.animals.map(animal => (
      <AnimalCard className="animal-list" key={animal.id} animal={animal} />
    ))
    return animal
  }

  render() {



    return (
      <div>
        {this.props.search === "" ? this.animal() : this.filteredAnimal()}
      </div>)

      }
    }

export default AnimalContainer;
