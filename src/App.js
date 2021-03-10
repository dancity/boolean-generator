import "./css/App.css";
import "./css/Input.css";
import "./css/Card.css";

import Optional from "./components/Optional";
import Required from "./components/Required";
import Exclude from "./components/Exclude";
import Card from "./components/Card";

import { useState } from "react";

function App() {
  const [cards, setCards] = useState([
    {
      id: 0,
      type: "required",
      keywords: [],
      deleted: false,
    },
  ]);

  function addCard(type) {
    setCards([
      ...cards,
      {
        id: cards.length,
        type: type,
        keywords: [],
        deleted: false,
      },
    ]);
  }

  function addKeyword(keyword, cardId) {
    setCards(
      cards.map((item) => {
        if (item.id === cardId) {
          return {
            ...item,
            keywords: [...item.keywords, keyword],
          };
        }
        return item;
      })
    );
  }

  const [output, setOutput] = useState("");
  function generateBoolean() {
    let internalOutput = "";
    let internalOutputMemo = "";
    let externalOutput = "";
    let operator = "";
    cards.forEach((card, id) => {
      card.keywords.forEach((keyword, subId) => {
        internalOutput =
          internalOutput +
          `${subId === 0 ? "" : "OR"} "${keyword.toLowerCase()}" `;
        internalOutputMemo = internalOutput;
      });
      //Seleciona o operador correto
      switch (card.type) {
        case "required":
          operator = "AND";
          break;
        case "optional":
          operator = "OR";
          break;
        case "exclude":
          operator = "NOT";
          break;
        default:
          operator = "";
      }
      internalOutput = "";
      externalOutput =
        externalOutput + ` ${id === 0 ? "" : operator} (${internalOutputMemo})`;
    });
    setOutput(externalOutput);
  }

  return (
    <div className="main">
      <div className="Input">
        <Required addCard={() => addCard("required")} />
        <Optional addCard={() => addCard("optional")} />
        <Exclude addCard={() => addCard("exclude")} />
      </div>
      <div className="cardbox">
        {cards.map((item) => (
          <Card key={item.id} card={item} addKeyword={addKeyword} />
        ))}
      </div>
      <div className="Output">
        <button onClick={() => generateBoolean()}>Generate Booleans</button>
        <textarea value={output} />
        <p>By: Matheus Rangel</p>
      </div>
    </div>
  );
}

export default App;
