import React from "react";
import trash from "../img/trash.svg";

function Card(props) {
  //Changes border color based on the type of card
  let color = "none";
  switch (props.card.type) {
    case "required":
      color = "darkgreen";
      break;
    case "optional":
      color = "darkblue";
      break;
    case "exclude":
      color = "darkred";
      break;
    default:
      color = "black";
  }

  console.log(props.card);

  //Handle submit a synonim
  function submit(event) {
    event.preventDefault();
    props.addKeyword(event.target[0].value, props.card.id);
    event.target[0].value = "";
  }

  return (
    <div className="Card" style={{ borderColor: color }}>
      <form onSubmit={submit}>
        <input
          type="text"
          id="keywords"
          name="keywords"
          placeholder="Add synonym"
          autoComplete="off"
        />
      </form>
      <div className="keywords">
        {props.card.keywords.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <img src={trash} alt="delete item" />
    </div>
  );
}

export default Card;
