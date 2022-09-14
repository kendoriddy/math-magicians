import React, { useState } from "react";
import calculate from "../logic/calculate";
import "../css/Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState({
    total: 0,
      next: null,
      operator: null,
  });
  const handleClick = (e) => {
    const result = calculate(input, e.target.textContent);
    setInput(result);
  };

  const resultDisplayClick = (e) => {
    setInput({
      total: e.target.textContent,
    });
  };

      const { total, next, operation } = input;
    return (
      <div className="overall">
        <div className="result-span" onChange={resultDisplayClick}>
            {total}
            {operation}
            {next}
        </div>
        <div className="grid-one">
          <button onClick={handleClick} type="button" className="btn delete number">
            AC
          </button>
          <button onClick={handleClick} type="button" className="btn number number">
            +/-
          </button>
          <button onClick={handleClick} type="button" className="btn clear number">
            %
          </button>
          <button onClick={handleClick} type="button" className="btn  equal-to operator">
            ÷
          </button>
        </div>
        <div className="grid-two">
          <button onClick={handleClick} type="button" className="btn number">
            7
          </button>
          <button onClick={handleClick} type="button" className="btn number">
            8
          </button>
          <button onClick={handleClick} type="button" className="btn number">
            9
          </button>
          <button onClick={handleClick} type="button" className="btn number operator">
            x
          </button>
        </div>
        <div className="grid-three">
          <button onClick={handleClick} type="button" className="btn number">
            4
          </button>
          <button onClick={handleClick} type="button" className="btn number">
            5
          </button>
          <button onClick={handleClick} type="button" className="btn number">
            6
          </button>
          <button onClick={handleClick} type="button" className="btn number  operator">
            -
          </button>
        </div>
        <div className="grid-four">
          <button onClick={handleClick} type="button" className="btn number">
            1
          </button>
          <button onClick={handleClick} type="button" className="btn number">
            2
          </button>
          <button onClick={handleClick} type="button" className="btn number">
            3
          </button>
          <button onClick={handleClick} type="button" className="btn number operator">
            +
          </button>
        </div>
        <div className="grid-five">
          <button onClick={handleClick} type="button" className="btn number zero">
            0
          </button>
          <button onClick={handleClick} type="button" className="btn number dot">
            .
          </button>

          <button onClick={handleClick} type="button" className="btn number operator">
            =
          </button>
        </div>
      </div>
    );
}

export default Calculator;
