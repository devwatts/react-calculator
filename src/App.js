
function App() {
  const createDigits = () => {
    const digits = [];
    for(let i=1;i<10;i++){
      digits.push(<button key={i}>{i}</button>)
    }
    return digits;
  }
  return (
    <div className="calculator">
      <div className="display">
        <span>(0)</span>
        <div>0</div>
        
      </div>
      <div className="operators">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>DEL</button>
      </div>
      <div className="numbers">
      {createDigits()}
      <button>0</button>
      <button>.</button>
      <button>=</button>
      </div>
    </div>
  );
}

export default App;
