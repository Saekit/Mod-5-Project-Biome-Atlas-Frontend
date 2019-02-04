import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getBiomes} from '../actions/biomeActions'
import HomeCard from '../components/HomeCard';
import RightArrow from '../components/RightArrow'
import LeftArrow from '../components/LeftArrow'
import { Container, Header } from 'semantic-ui-react'

class HomeContainer extends React.Component {

  componentDidMount(){
    this.props.getBiomes()
  }

  state = {
    currentIndex: 0,
    translateValue: 0
  }

  goToPrevSlide = () => {
   if(this.state.currentIndex === 0)
     return;
     this.setState(prevState => ({
     currentIndex: prevState.currentIndex - 1,
     translateValue: prevState.translateValue + this.slideWidth()
   }))
 }

  goToNextSlide = () => {
      if(this.state.currentIndex === this.props.biomes.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }



  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }


  render(){

    return(
      <Container fluid>
        <Header as='h2' textAlign='center'>Welcome to Biome Atlas</Header>
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.props.biomes.map((image, i) => (
                <HomeCard key={i} biome={image} />
              ))
            }
        </div>

        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        />
      </div>
      </Container>
    )
  }
}

function mapStateToProps(state){
  return {
    biomes: state.biomes
  }
}
function mapDispatchToProps(dispatch){
  return {
    getBiomes: bindActionCreators(getBiomes, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
