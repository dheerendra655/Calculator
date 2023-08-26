import React from 'react'

function Display(props) {
  let val ;
  
  function getValue(){
    val = "props.str1";
  }
  return (
   
    <input type='text' className='display'  onChange={()=>getValue()} value={props.str1}/>
      
   
  )
}

export default Display
