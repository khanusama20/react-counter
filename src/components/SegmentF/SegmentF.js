import React from 'react'
import './SegmentF.css'

const SegmentF = props => {

  let topDivStyle = props.input === 1 ? {
    borderRightColor: 'red'
  } : {}

  let bottomDivStyle = props.input === 1 ? {
    borderLeftColor: 'red'
  } : {}

  return (
    <div className="segment-f">
      <div className="trapezoid-shape-left-F" style={topDivStyle}></div>
      <div className="trapezoid-shape-right-F" style={bottomDivStyle}></div>
    </div>
  );
}

export default SegmentF;