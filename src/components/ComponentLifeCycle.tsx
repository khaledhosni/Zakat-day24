import React, { useState } from "react";
import { useEffect } from "react";
export default function ComponentLifeCycle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted-- Hello");
    return () => {
      // cleanup on unmount
      console.log("Component unmounted-- Goodbye");
    };
  }, []); // runs once on mount and cleanup on unmount

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // runs on count change
  return (
    <div>
      ComponentLifeCycle
      <p>Count: {count}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br></br>
    </div>
  );
}
