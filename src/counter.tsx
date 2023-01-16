import React, { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      Hello This is my counter: {counter}

      <button onClick={() => { setCounter(e => e + 1) }}>Click me</button>
    </div>
  )
}