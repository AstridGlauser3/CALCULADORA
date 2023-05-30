import React, { useState } from "react"
import "./style.scss"

function Calculator() {
  const [display, setDisplay] = useState("")

  const handleNumberClick = (e) => {
    if (display.length < 9) {
      setDisplay((prevDisplay) => prevDisplay + e.target.value)
    }
  }

  const handleDecimalClick = () => {
    if (!display.includes(".") && display.length < 9) {
      setDisplay((prevDisplay) => prevDisplay + ".")
    }
  }

  const handleOperatorClick = (operator) => {
    if (display !== "" && !display.includes(" ")) {
      setDisplay((prevDisplay) => prevDisplay + " " + operator + " ")
    }
  }

  const handleEqualClick = () => {
    if (display.includes(" ")) {
      let operands = display.split(" ")
      if (operands.length === 3 && operands[2] !== "") {
        let result = eval(display)
        if (result < 0 || result > 999999999 || String(result).length > 9) {
          setDisplay("ERROR")
        } else {
          setDisplay(String(result))
        }
      }
    }
  }

  const handlePlusMinusClick = () => {
    if (display[0] === "-") {
      setDisplay(display.slice(1))
    } else if (display.length < 9) {
      setDisplay("-" + display)
    }
  }

  const handleClearClick = () => {
    setDisplay("")
  }

  return (
    <div className="calculator">
      <input type="text" value={display} disabled />
      <div className="button-row">
        {[1, 2, 3].map((number) => (
          <button key={number} value={number} onClick={handleNumberClick}>
            {number}
          </button>
        ))}
        <button onClick={() => handleOperatorClick("+")}>+</button>
      </div>
      <div className="button-row">
        {[4, 5, 6].map((number) => (
          <button key={number} value={number} onClick={handleNumberClick}>
            {number}
          </button>
        ))}
        <button onClick={() => handleOperatorClick("-")}>-</button>
      </div>
      <div className="button-row">
        {[7, 8, 9].map((number) => (
          <button key={number} value={number} onClick={handleNumberClick}>
            {number}
          </button>
        ))}
        <button onClick={() => handleOperatorClick("*")}>*</button>
      </div>
      <div className="button-row">
        <button value="0" onClick={handleNumberClick}>
          0
        </button>
        <button onClick={handleDecimalClick}>.</button>
        <button onClick={() => handleOperatorClick("/")}>/</button>
        <button onClick={handleEqualClick}>=</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleOperatorClick("%")}>MOD</button>
        <button onClick={handlePlusMinusClick}>+/-</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  )
}

export default Calculator
