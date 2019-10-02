import React from "react";

const OperatorButton = (props) => {
  const { operator } = props;
  return (
    <>
    <div className="operators-button">{ operator }</div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;
