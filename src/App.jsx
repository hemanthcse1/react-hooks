import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UseEffectComponent from "./UseEffectComponent";
import MyComponent from './MyComponent'
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <UseEffectComponent />

     {/* <MyComponent/> */}

     <Counter/>

    </div>
  );
}

export default App;
