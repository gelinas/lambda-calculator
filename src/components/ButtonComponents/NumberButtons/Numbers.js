import React, { useState } from "react";

//import any components needed

import NumbersButton from './NumberButton';

// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

import { numbers } from '../../../data.js';

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState(numbers);
  console.log(props);
  return (
    <div className="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numbersState.map((el) => (<NumbersButton number={el} press={props.press} />))
         
       //numbers.map(el => {
        //<NumbersButton number={el} />
       //})
       }
    </div>
  );
};

export default Numbers;