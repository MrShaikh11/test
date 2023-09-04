import React from "react";

function Button({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Button;
