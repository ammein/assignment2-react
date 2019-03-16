import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/validation.js';
import Char from './CharComponent/char.js';

class App extends Component {

  state = {
    text : "",
    value : []
  }

  textChangeListener = (event) =>{
    this.setState({
      text : event.target.value
    })
  }

  keyDownListener = (event) =>{
    if(event.keyCode === 13){
      var valueEntered = this.validate(event.target.value);
      this.setState({ value: this.state.value.concat(valueEntered) })
      event.target.value = "";
    }
  }

  validate = (text) =>{
    if (text.length > 50 || text.length < 5) {
      return [];
    } else {
      return text;
    }
  }

  deleteList = (event,index) =>{
    const value = this.state.value.slice();
    var valueIndex;

    valueIndex = this.state.value.findIndex((value)=>{
      return value.length - 1 === index;
    });

    // Splice it
    value.splice(valueIndex , 1);

    this.setState({value : value});
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={(event)=>this.textChangeListener(event)} onKeyDown={(event) => this.keyDownListener(event)}></input>
        <Validation text={this.state.text} />
        <Char list={this.state.value} click={this.deleteList} />
      </div>
    );
  }
}

export default App;
