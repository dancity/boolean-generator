import React from "react";

function Optional(props) {
  return (
    <div className="Optional" onClick={() => props.addCard()}>
      <h1>Add OR box</h1>
    </div>
  );
}

export default Optional;
