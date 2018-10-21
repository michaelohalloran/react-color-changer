import React from 'react';

const Box = ({color})=> {

  const style= {
    backgroundColor: color,
    display: 'inline-block',
    width: '180px',
    height: '180px'
  }
  return (
    <div className="box" style={style}>
    </div>
  )
}


export default Box;