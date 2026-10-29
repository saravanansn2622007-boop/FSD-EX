import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback
} from "react";

function App() {
  // useState: store counter value
  const [count, setCount] = useState(0);

  // useRef: refer to the input element
  const inputRef = useRef(null);

  // useEffect: update page title
  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  // useMemo: calculate square
  const square = useMemo(() => {
    return count * count;
  }, [count]);

  // useCallback: cache increment function
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>React Hooks Demonstration</h1>

      <h2>useState Hook</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      {" "}
      <button onClick={() => setCount(0)}>Reset</button>

      <h2>useEffect Hook</h2>
      <p>Browser tab title updates when count changes.</p>

      <h2>useRef Hook</h2>
      <input ref={inputRef} placeholder="Enter text" />
      {" "}
      <button onClick={focusInput}>Focus Input</button>

      <h2>useMemo Hook</h2>
      <p>Square of {count} = {square}</p>

      <h2>useCallback Hook</h2>
      <p>Increment uses a cached function definition.</p>
    </div>
  );
}

export default App;

