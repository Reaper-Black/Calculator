import {useState} from 'react';


function App() {
    const [calcu, setCalcu] = useState(""); 
    const [result, setResult] = useState(""); 

    const ops = ['+', '-', '*', '/', '.'];

    const updateCalcu = value => {
      if (
        ops.includes(value) && calcu === '' ||
        ops.includes(value) && ops.includes(calcu.slice(-1))
      ){
        return;
      }

      setCalcu(calcu + value);

      if(!ops.includes(value)){
        setResult(eval(calcu + value).toString());
      }
    }


    const createDigits = () => {
      const digits = [];

      for (let i=1; i<10; i++){
        digits.push(
          <button onClick={() => updateCalcu(i.toString)} key={i}>
            {i}
          </button>
        )
      }

      return digits;
    }

    const calculate = () => {
      setCalcu(eval(calcu).toString());
    }

    const deleteLast = () => {
      if (calcu === '') {
        return;
      }
      const value = calcu.slice(0, -1);
      setCalcu(value);
    }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}
          {calcu || "0"}
        </div>
         <div className="operators">
          <button onClick={() => updateCalcu('+')}>+</button>
          <button onClick={() => updateCalcu('-')}>-</button>
          <button onClick={() => updateCalcu('*')}>*</button>
          <button onClick={() => updateCalcu('/')}>/</button>
          <button onClick={deleteLast}>DEL</button>
         </div>
          <div className="digits">
            { createDigits()}
          <button onClick={() => updateCalcu('0')}>0</button>
          <button onClick={() => updateCalcu('.')}>.</button>
          <button onClick={calculate}>=</button>
          </div>
      </div>
    </div>
  );
}

export default App;
