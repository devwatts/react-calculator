import {useState} from 'react';
function App() {
  const [calc, setCalc] = useState("");
  const ops = ["/","+","-","*","."];

  const calculateResult = (array,newOp) => {
    var calculatedResult = 0;
    var newOperator = "";
    
    if(!(newOp == undefined)){
      newOperator = newOp;
    }

    if(array.includes('/')){
      var numberOne = parseFloat(array.split("/")[0]);
      var numberTwo = parseFloat(array.split("/")[1]);
      calculatedResult = numberOne/numberTwo;
      setCalc(calculatedResult.toString() + newOperator);
    }else if(array.includes('+')){
      var numberOne = parseFloat(array.split("+")[0]);
      var numberTwo = parseFloat(array.split("+")[1]);
      calculatedResult = numberOne+numberTwo;
      setCalc(calculatedResult.toString() + newOperator);
    }else if(array.includes('-')){
      var numberOne = parseFloat(array.split("-")[0]);
      var numberTwo = parseFloat(array.split("-")[1]);
      calculatedResult = numberOne-numberTwo;
      setCalc(calculatedResult.toString() + newOperator);
    }else if(array.includes('*')){
      var numberOne = parseFloat(array.split("*")[0]);
      var numberTwo = parseFloat(array.split("*")[1]);
      calculatedResult = numberOne*numberTwo;
      setCalc(calculatedResult.toString() + newOperator);
    }else{
      return;
    }
  }

  const operatorPresenceCheck = (array) => {
    var bool = false;
    for(let i = 0; i<array.length; i++){
      if(ops.includes(array[i])){
        if(!(array[i] == ".")){
          bool = true;
          return bool;
        }
      }
    }
    return bool;
  }

  const deleteFromDisplay = () =>{
    setCalc(calc.slice(0,-1))
  }

  const updateCalc = (value) => {
    if(ops.includes(value) && calc === "" ||
    ops.includes(value) && ops.includes(calc.slice(-1)) 
    ){
      return;
    }
    if(operatorPresenceCheck(calc)){
      if(ops.includes(value) && value != "."){
        calculateResult(calc,value);
        return;
      }
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
      <button onClick={() => calculateResult(calc)}>=</button>
      </div>
    </div>
  );
}

export default App;
