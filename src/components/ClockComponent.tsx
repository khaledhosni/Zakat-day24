import React, { useState } from "react";

export default function ClockComponent() {
  const [time, settime] = useState("");

  // use set interval in useeffct
  React.useEffect(() => {
    const interval = setInterval(() => {
      settime(new Date().toLocaleTimeString());
      console.log(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: "blueviolet", color: "white" }}>
      <p>Time: {time}</p>
    </div>
  );
}
