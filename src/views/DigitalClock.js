import React, { useEffect, useState } from 'react';
import LED from '../components/LED/LED'
import truthTable from '../config/truthTable';

let timer = null;
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

/*
class DigitalClock extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      truthTable: truthTable,
      active: 0,
      offCounter: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0
      }
    }
  }

  counterOn () {
    let self = this;
    let newState = {}
    timer = setInterval(function () {
      newState = {
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
    }, 1000)
  }

  counterOff () {
    clearInterval(timer);
    this.setState({
      active: 0
    })
  }

  render () {
    return (
      <div style={{display: "flex", flexDirection: "row"}}>
        {
          this.props.signal === 'on'? (
            <LED digitTable={this.state.truthTable[numWord[this.state.active]]}/>
          ) : (
            <LED digitTable={this.state.offCounter}/>
          )
        }
      </div>
    );
  }
}

*/

const DigitalClock = props => {

  const [activeCount, setCounter] = useState(0);
  const offCounter = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0
  };

  let counter = 0;

  useEffect(() => {
    if (props.signal === "on") {
      timer = setInterval(function () {
        if (counter === 9) {
          counter = 0;
          setCounter(0)
        } else {
          counter += 1;
          setCounter(counter);
        }
      }, 1000)
    } else {
      counter = 0;
      setCounter(0);
      clearInterval(timer)
    }

  }, [props]);

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      {
        props.signal === 'on'? (
          <LED digitTable={truthTable[numWord[activeCount]]} indicator={props.signal}/>
        ) : (
          <LED digitTable={offCounter} indicator={props.signal}/>
        )
      }
    </div>
  )
}

export default DigitalClock;