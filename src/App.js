import "./App.css";
import { useState } from "react";
import Age from "./components/Age";
import Button from "./components/Button";

function App() {
  const [age, setAge] = useState(0);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setAge(age + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Age age={age} />
        <Button handleClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
