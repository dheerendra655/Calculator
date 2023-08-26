import React from 'react'

function Utility(props) {
  return (
    <div className='button' onClick={()=>props.str(props.val)}>
        {props.symbol}
  </div>
  )
}

export default Utility;

