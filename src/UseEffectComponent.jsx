import Reac, { useState, useEffect } from "react";

export default function UseEffectComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");


  useEffect(() => {
    document.title = `Count ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "blue" ? "red" : "blue"));
  }

  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Click</button> <br></br>
      <button onClick={subtractCount}>Subtract</button> <br></br>
      <button onClick={changeColor}>Change Color</button>
    
    </div>
  );
}
