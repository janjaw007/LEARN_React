import { useState } from "react";
export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const tip = (bill * (tip1 + tip2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <Bill bill={bill} onBill={setBill} />
      <Tip tip={tip1} onSelect={setTip1}>
        How did you like the service?
      </Tip>
      <Tip tip={tip2} onSelect={setTip2}>
        How did your friend like the service?
      </Tip>

      {bill > 0 && (
        <>
          <Result bill={bill} tip={tip} />
          <Reset onReset={handleReset} />{" "}
        </>
      )}
    </div>
  );
}
function Bill({ bill, onBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </div>
  );
}
function Tip({ children, tip, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Result({ bill, tip }) {
  return (
    <div>
      <h3>{`You pay ${bill + tip}$ ${bill}$+${tip}$ tip`}</h3>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
