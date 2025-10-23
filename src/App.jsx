import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const add = () => setCount(Math.min(count + 1));
  const minus = () => setCount(Math.max(count - 1));
  const reset = () => setCount(0);

  return (
    <>
      <h1>Mini CRUD App</h1>

      {/* Buttons */}
      <div className="flex gap-8 mt-8 mb-8 ml-4">
        <button className="btn btn-success" onClick={add}>
          Add
        </button>
        <button className="btn btn-accent" onClick={minus}>
          Subtract
        </button>
        <button className="btn glass" onClick={reset}>
          Reset
        </button>
        <p>Count is {count}</p>
      </div>
    </>
  );
}

export default App;
