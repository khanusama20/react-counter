import React from 'react'
import './SegmentF.css'

const SegmentF = props => {

  let topDivStyle = props.input === 1 ? {
    borderRightColor: '#ff3b19'
  } : {}

  let bottomDivStyle = props.input === 1 ? {
    borderLeftColor: '#ff3b19'
  } : {}

  return (
    <div className="segment-f">
      <div className="trapezoid-shape-left-F" style={topDivStyle}></div>
      <div className="trapezoid-shape-right-F" style={bottomDivStyle}></div>
    </div>
  );
}

export default SegmentF;