import React from "react";

const NumberButton = (props) => {
  console.log(`numberbutton props are: ${props.number} `);
  console.log(`numberbutton props are: ${props.press} `);


  if (props.number === "0") {
    return (
    <>
      <div 
        className="numbers-button-zero" 
        onClick={() => props.press(props.number)}
      >
        { props.number }
      </div>
    </>
    );
  } else {
    return (
      <>
        <div 
          className="numbers-button"
          onClick={() => props.press(props.number)}
        >
          { props.number }</div>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
      </>
      );
  }

};

export default NumberButton;