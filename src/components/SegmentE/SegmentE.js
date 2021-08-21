import React from 'react';
import './SegmentE.css'

const SegmentE = props => {

  let topDivStyle = props.input === 1 ? {
    borderRightColor: 'red'
  } : {}

  let bottomDivStyle = props.input === 1 ? {
    borderLeftColor: 'red'
  } : {}

  return (
    <div className="segment-e">
      <div className="trapezoid-shape-left-E" style={topDivStyle}></div>
      <div className="trapezoid-shape-right-E" style={bottomDivStyle}></div>
    </div>
  )
}

export default SegmentE;