import React from "react";
import { useState, useRef } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  let timerRef = useRef(null);

  function startTime() {
    timerRef.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
  }

  function stopTime() {
    clearInterval(timerRef.current);
    timerRef.current = null
  }

  function resetTime() {
    stopTime();
    setCount(0)
  }
  return (
    <>
      <h3>Time : {count}</h3>
      <button onClick={startTime}>INCE</button>
      <button onClick={stopTime}>STOP</button>
      <button onClick={resetTime}>RESET</button>
    </>
  )
}

export default App