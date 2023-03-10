import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { EmployeeView } from "./features/EmployeeView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <EmployeeView />
    </div>
  );
}

export default App;
