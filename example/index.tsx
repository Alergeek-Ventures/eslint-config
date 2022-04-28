import { useState } from "react";

const INITIAL_STATE = 0;
const STEP_SIZE = 1;

export const App = () => {
  const [count, setCount] = useState(INITIAL_STATE);

  return (
    <div>
      <p>count: {count}</p>
      <button
        onClick={() => {
          setCount((c) => c + STEP_SIZE);
        }}
      >
        +
      </button>
    </div>
  );
};
