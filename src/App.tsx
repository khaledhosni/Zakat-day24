import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import ComponentLifeCycle from "./components/ComponentLifeCycle";
import ClockComponent from "./components/ClockComponent";
function App() {
  const [count, setCount] = useState(0);
  const [showComp, setShowComp] = useState(true);
  // show hide  clock component
  const [showClock, setShowClock] = useState(true);
  return (
    <>
      <section id="center">
        <h1>Welcome to the App</h1>
        //show component based on showComp state
        {showComp && <ComponentLifeCycle />}
        <br></br>
        <button onClick={() => setShowComp(!showComp)}>
          {showComp ? "Hide" : "Show"} Component
        </button>
        <button onClick={() => setShowClock(!showClock)}>
          {showClock ? "Hide" : "Show"} Clock
        </button>
        {showClock && <ClockComponent />}
      </section>
    </>
  );
}

export default App;
