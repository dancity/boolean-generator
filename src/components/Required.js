import React from "react";

function Required(props) {
  return (
    <div className="Required" onClick={() => props.addCard()}>
      <h1>Add AND box</h1>
    </div>
  );
}

export default Required;
