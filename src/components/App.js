
import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: props.slides,
      index: 0,
    };
  }

  goToSlide = (newIndex) =>{
    this.setState({
      index: newIndex,
    })
  }

  nextSlide = () =>{
    const {index, slides} = this.state;
    if (index < slides.length - 1) {
      this.goToSlide(index+1);
    }
  }
  prevSlide = ()=>{
    const{index}=this.state;
    if (index>0) {
      this.goToSlide(index-1)
    }
  }
  restartSlide = ()=>{
    this.goToSlide(0);
  }

  render() {
    
    const { index, slides } = this.state;
    const currentSlide = slides[index];

    return (
      <div>
        <h1 id="title" data-testid="title" >{currentSlide.title}</h1>
        <p id="text" data-testid="text" >{currentSlide.text}</p>

        <button id="button-prev" data-testid="button-prev" onClick={this.prevSlide} disabled={index===0}>Previous Slide</button>
        <button id="button-next" data-testid="button-next" onClick={this.nextSlide} disabled={index===slides.length}>Next Slide</button>
        <button id="button-restart" data-testid="button-restart" onClick={this.restartSlide} disabled={index===0}>Restart</button>
      </div>
    );
  }
}

export default App;

