import {useState} from 'react';
function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/","+","-","*","."]

  const deleteFromDisplay = () =>{
    setCalc(calc.slice(0,-1))
  }

  const getResult = () => {

  }

  const updateCalc = (value) => {
    if(ops.includes(value) && calc === "" ||
    ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc + value);
  }

  const createDigits = () => {
    const digits = [];
    for(let i=1;i<10;i++){
      digits.push(<button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>)
    }
    return digits;
  }
  return (
    <div className="calculator">
      <div className="display">
        <span>{result || ""}</span>
        <div>{calc || "0"}</div>
        
      </div>
      <div className="operators">
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={() => updateCalc("*")}>*</button>
        <button onClick={() => updateCalc("/")}>/</button>
        <button onClick={() => deleteFromDisplay()}>DEL</button>
      </div>
      <div className="numbers">
      {createDigits()}
      <button onClick={() => updateCalc("0")}>0</button>
      <button onClick={() => updateCalc(".")}>.</button>
      <button onClick={() => updateCalc("")}>=</button>
      </div>
    </div>
  );
}

export default App;
