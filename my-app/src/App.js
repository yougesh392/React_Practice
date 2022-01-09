import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const Counter = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      {count}
      <button onClick={Counter}>Click Me</button>
    </div>
  );
};

export default App;
