import { useState, useMemo } from "react";
//really expensive component to compute
const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
  const [num, setNum] = useState(35);
  const [isGreen, setIsGreen] = useState(true);
  //   when is gree changed it rerender the entire component
  //   use memo tells the react to not change it keep it there as
  //   long as the number does not change
  const fib = useMemo(() => fibonacci(num), [num]);

  //   const fib = fibonacci(num);

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useMemo Example
      </h1>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
};

export default MemoComponent;
