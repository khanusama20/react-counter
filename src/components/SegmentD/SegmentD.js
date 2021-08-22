import React from 'react'
import './SegmentD.css'

const SegmentD = props => {

  let topDivStyle = props.input === 1 ? {
    borderBottomColor: '#ff3b19'
  } : {}

  let bottomDivStyle = props.input === 1 ? {
    borderTopColor: '#ff3b19'
  } : {}

  return (
    <div className="segment-d">
      <div className="trapezoid-shape-top-D" style={topDivStyle}></div>
      <div className="trapezoid-shape-bottom-D" style={bottomDivStyle}></div>
    </div>
  );
}

export default SegmentD;