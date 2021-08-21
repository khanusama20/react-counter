import React from 'react'
import './SegmentA.css'

const SegmentA = props => {
  let topDivStyle = props.input === 1 ? {
    borderBottomColor: 'red'
  } : {}

  let bottomDivStyle = props.input === 1 ? {
    borderTopColor: 'red'
  } : {}

  return (
    <div className="segment-a">
      <div className="trapezoid-shape-top" style={topDivStyle}></div>
      <div className="trapezoid-shape-bottom" style={bottomDivStyle}></div>
    </div>
  );
}

export default SegmentA;