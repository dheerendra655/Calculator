import React from 'react'

function Operator(props) {
  return (
    <div className='button' onClick={()=>props.str(props.val)}>
      {props.symbol}
    </div>
  )
}

export default Operator
