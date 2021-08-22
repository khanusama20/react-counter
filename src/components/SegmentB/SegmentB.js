import React from 'react'
import './SegmentB.css'

const SegmentB = props => {
  let topDivStyle = props.input === 1 ? {
    borderRightColor: '#ff3b19'
  } : {}

  let bottomDivStyle = props.input === 1 ? {
    borderLeftColor: '#ff3b19'
  } : {}

  return (
    <div className="segment-b">
      <div className="trapezoid-shape-left-B" style={topDivStyle}></div>
      <div className="trapezoid-shape-right-B" style={bottomDivStyle}></div>
      
    </div>
  )
}

export default SegmentB;