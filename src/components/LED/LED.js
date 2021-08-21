import React from 'react'
import SegmentA from '../SegmentA/SegmentA';
import SegmentB from '../SegmentB/SegmentB';
import SegmentC from '../SegmentC/SegmentC';
import SegmentD from '../SegmentD/SegmentD';
import SegmentE from '../SegmentE/SegmentE';
import SegmentF from '../SegmentF/SegmentF';
import SegmentG from '../SegmentG/SegmentG'

const LED = props => {
  console.log(props.digitTable)
  return (
    <div style={{marginLeft: 100}} className="led">
      <SegmentA input={props.digitTable.a}/>
      <SegmentB input={props.digitTable.b}/>
      <SegmentF input={props.digitTable.f}/>
      <SegmentC input={props.digitTable.c}/>
      <SegmentE input={props.digitTable.e}/>
      <SegmentD input={props.digitTable.d}/>
      <SegmentG input={props.digitTable.g}/>
    </div>
    
  );
}

export default LED;