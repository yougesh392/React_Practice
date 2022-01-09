import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {count}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
