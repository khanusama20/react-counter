import React from 'react'
import './SegmentG.css'

const SegmentG = props => {

  let topDivStyle = props.input === 1 ? {
    borderBottomColor: '#ff3b19'
  } : {}

  let bottomDivStyle = props.input === 1 ? {
    borderTopColor: '#ff3b19'
  } : {}

  return (
    <div className="segment-g">
      <div className="trapezoid-shape-top-G" style={topDivStyle}></div>
      <div className="trapezoid-shape-bottom-G" style={bottomDivStyle}></div>
    </div>
  );
}

export default SegmentG;