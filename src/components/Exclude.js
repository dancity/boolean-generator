import React from "react";

function Exclude(props) {
  return (
    <div className="Exclude" onClick={() => props.addCard()}>
      <h1>Add NOT box</h1>
    </div>
  );
}

export default Exclude;
