import React, { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmpleyed, setEmployement] = useState(false)

  const updateName = () => {
    setName("Hemanth");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const updateEmployement = () => {
    setEmployement(!isEmpleyed)
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={updateAge}>Set Age</button>

      <p>Is Employed: {isEmpleyed ? "YES" : "NO"}</p>
      <button onClick={updateEmployement}>Set Employement</button>

    </div>
  );
}
