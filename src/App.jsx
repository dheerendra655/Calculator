import { useState } from "react";

import "./App.css";
import Display from "./components/Display";
import Operator from "./components/Operator";
import Number from "./components/Number";
import * as operators from "./OperatorFunctions.js";
import Utility from "./components/utility";
function App() {
  const [display, setDisplay] = useState("");
  const [paranthesis,setParanthesis] = useState(false);


  function handleKeys(numb){
     
      setDisplay(display+numb);
  }
  function handleOperators(val){

    switch (val){
      case 'ce' :
        setDisplay(operators.handleCe(display));
         break;
      case 'c' :
        setDisplay("");
         break;
      case 'back' :
        setDisplay(operators.handleBack(display));
         break;
      case 'brackets':
        {
          console.log('brackets');
        setDisplay(operators.handleBrackets(paranthesis,display));
        if(paranthesis == true){

          setParanthesis(false);
        }
        if(paranthesis == false){

          setParanthesis(true);
        }
        
        console.log(paranthesis);
      }
        break;
      
    }

    }

      function utility(val){
        let newStr = operators.replaceLastOperator(display,val);
         setDisplay(newStr);
      }

  return (
    <>
      <div className="main-container">
        <h1>CALCULATOR</h1>

        <div className="container">
          <Display str1 = {display} />
          <div className="button-container">
            <div className="row">
            <Operator str = {utility} val={'%'} symbol="&#37;" />
            <Utility str = {handleOperators}  val={'ce'} symbol="CE" />
            <Utility str = {handleOperators} val={'c'} symbol="C" />
            <Utility str = {handleOperators} val={'back'} symbol="&#60;" />
            </div>
            <div className="row">
  
            <Number str = {handleKeys} val={7} symbol="7" />
            <Number str = {handleKeys} val={8} symbol="8" />
            <Number str = {handleKeys} val={9} symbol="9" />
            <Operator str = {utility} val={'÷'} symbol="&divide;" />
            </div>
            <div className="row">

            <Number str = {handleKeys} val={4} symbol="4" />
            <Number str = {handleKeys} val={5} symbol="5" />
            <Number str = {handleKeys} val={6} symbol="6" />
            <Operator str = {utility} val={'×'} symbol="&times;" />
            </div>
            <div className="row">

            <Number str = {handleKeys} val={1} symbol="1" />
            <Number str = {handleKeys} val={2} symbol="2" />
            <Number str = {handleKeys} val={3} symbol="3" />
            <Operator str = {utility} val={'−'} symbol="&minus;" />
            </div>
           <div className="row">
            <Operator str = {handleOperators} val={'brackets'} symbol="()" />
            <Number str = {handleKeys} val={0} symbol="0" />
            <Utility str = {handleOperators} val={'equals'} symbol="&#61;	" />
            <Operator str = {utility} val={'+'} symbol="&#43;" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

//`<i {class="fa-thin fa-delete-left"></i>"}`
