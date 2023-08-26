import React from 'react'

function Number(props) {
  return (
    <div className='button' onClick={()=>props.str(props.val)}>
      {props.symbol}
    </div>
  )
}

export default Number

