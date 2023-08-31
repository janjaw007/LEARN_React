import { useState } from "react";
import "./index.css";
import JSONDATA from "./MOCK_DATA (1).json";

export default function App() {
  const [word, setWord] = useState("");
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      {JSONDATA.filter((obj) => {
        if (word === "") {
          return obj;
        } else if (obj.first_name.toLowerCase().includes(word.toLowerCase())) {
          return obj;
        }
      }).map((obj) => (
        <Name name={obj.first_name} key={obj.id} />
      ))}
    </div>
  );
}

function Name({ name }) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
