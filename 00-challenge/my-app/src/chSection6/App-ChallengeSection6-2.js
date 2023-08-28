import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>step:{step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        {count === 0 && `Today`}
        {count > 0 && `${count} days from today is ${date.toDateString()}`}
        {count < 0 && `${Math.abs(count)} days ago was ${date.toDateString()}`}
      </p>
      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>RESET</button>
      ) : null}
    </div>
  );
}
