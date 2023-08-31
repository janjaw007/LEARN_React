import { useState } from "react";
import "./index.css";

export default function App() {
  const [temp, setTemp] = useState(10);

  function handleUpTemp() {
    if (temp > 29) return;
    setTemp((curTemp) => curTemp + 1);
  }
  function handleDownTemp() {
    if (temp < 1) return;
    setTemp((curTemp) => curTemp - 1);
  }

  return (
    <div className="app-container ">
      <div className="temperature-display-container">
        {temp !== 15 && <TempDisplay temp={temp} />}
        {temp === 15 && (
          <div className={`temperature-display neutral`}>{`${temp}C`}</div>
        )}
      </div>
      <div className="button-container">
        <Button onChangeTemp={handleUpTemp}>+</Button>
        <Button onChangeTemp={handleDownTemp}>-</Button>
      </div>
    </div>
  );
}

function TempDisplay({ temp }) {
  return (
    <div className={`temperature-display ${temp < 16 ? "cold" : "hot"}`}>
      {`${temp}C`}
    </div>
  );
}

function Button({ children, onChangeTemp }) {
  return <button onClick={onChangeTemp}>{children}</button>;
}
