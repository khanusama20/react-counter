import React, { Component } from 'react';
import LED from '../components/LED/LED'
import truthTable from '../config/truthTable';

const numWord = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
]
class DigitalClock extends Component {
  constructor () {
    super();
    
    this.state = {
      truthTable: truthTable,
      active: 0
    }
  }

  componentDidMount () {
    let self = this;
    
    setInterval(function () {
      let newState = {
        ...self.state
      };
      if (newState.active === 9) {
        self.setState({
          active: 0
        })
      } else {
        self.setState({
          active: newState.active + 1
        })
      }
    }, 900)
  }
  render () {
    return (
      <div style={{display: "flex", flexDirection: "row"}}>
        <LED digitTable={this.state.truthTable[numWord[this.state.active]]}/>
      </div>
    );
  }
}

export default DigitalClock;