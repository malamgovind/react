import { useState } from "react";

function Task01() {
  const [a, setc] = useState(10);
  const [b, setB] = useState(3);

  return (
    <div>
      <p>1 :Addition: {a} + {b} = {a + b}</p>
      <p>2 :Subtraction: {a} - {b} = {a - b}</p>
      <p>3 :Multiplication: {a} × {b} = {a * b}</p>
      <p>4 :Division: {a} ÷ {b} = {a / b}</p>
      <p>5 :Modulo: {a} % {b} = {a % b }</p>

      <button onClick={() => setc(a + 1)}>Increase A</button>
      <button onClick={() => setc(a - 1)}>Decrease A</button><br />
      <button onClick={() => setB(b + 1)}>Increase B</button>
      <button onClick={() => setB(b - 1)}>Decrease B</button>
    </div>
  );
}

export default Task01;
