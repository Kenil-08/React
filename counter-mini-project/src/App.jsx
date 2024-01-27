// This mini Project allow you to increase/decrease between 0 to 20.

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function addValue() {
    if (count < 20){
      setCount(count + 1);
    }    
  }
  function removeValue() {
    if (count > 0){
      setCount(count - 1);
    } 
  }
  return (
    <>
      <h1>Counter Mini Project</h1>
      <h3>Current Value : {count}</h3>
      <button id="add" onClick={addValue}>Add Value {count}</button>
      <button id="remove" onClick={removeValue}>Remove Value {count}</button>
    </>
  );
}

export default App;
