import React, { useEffect, useState } from "react";

export default function useEffectHook() {
  const [count, setCount] = useState(0);
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
      <div>Hello again</div>
    </div>
  );
}
