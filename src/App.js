import React, { useState } from "react";
import "./App.css";
import * as math from "mathjs";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText(text + val);  // boşluk için
  };

  const calculateResult = () => {
    const input = text;   // virgülleri kaldırmak için
    setResult(math.evaluate(input));
  };

  const resetInput = () => {  
    setResult("");  
    setText("");
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />

        <div className="row">
          <Buttons symbol="7" handleClick={addToText} />
          <Buttons symbol="8" handleClick={addToText} />
          <Buttons symbol="9" handleClick={addToText} />
          <Buttons symbol="/" color="#00ADB5" handleClick={addToText} />
        </div>

        <div className="row">
          <Buttons symbol="4" handleClick={addToText} />
          <Buttons symbol="5" handleClick={addToText} />
          <Buttons symbol="6" handleClick={addToText} />
          <Buttons symbol="*" color="#00ADB5" handleClick={addToText} />
        </div>

        <div className="row">
          <Buttons symbol="1" handleClick={addToText} />
          <Buttons symbol="2" handleClick={addToText} />
          <Buttons symbol="3" handleClick={addToText} />
          <Buttons symbol="-" color="#00ADB5" handleClick={addToText} />
        </div>

        <div className="row">
          <Buttons symbol="0" handleClick={addToText} />
          <Buttons symbol="." handleClick={addToText} />
          <Buttons symbol="=" handleClick={calculateResult} color="darkgreen" />
          <Buttons symbol="+" color="#00ADB5" handleClick={addToText} />
        </div>

        <Buttons symbol="Clear" handleClick={resetInput} color="red" />
      </div>
    </div>
  );
}

export default App;
