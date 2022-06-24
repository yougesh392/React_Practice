import React, { useEffect, useState } from "react";
import Hello from "./Hello";

export default function useEffectHook() {
  const [count, setCount] = useState(0);
  const [showHello, setShowHello] = useState(false);
  useEffect(() => {
    //updates the document using the browser API
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <p>you Clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me.
      </button>
      <div>
        <button
          onClick={() => {
            setShowHello(!showHello);
          }}
        >
          Toggle
        </button>
        {showHello && <Hello />}
      </div>
    </div>
  );
}
