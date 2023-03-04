import React, { useState } from "react";
import "../css/RomanConverter.css";

function DecimalToRoman() {
  const [decimalValue, setDecimalValue] = useState("");
  const [romanNumeral, setRomanNumeral] = useState("");

  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  const convertDecimalToRoman = () => {
    let num = parseInt(decimalValue);
    let result = "";

    if (isNaN(num)) {
      setRomanNumeral("Invalid input");
      return;
    }

    if (num < 1 || num > 3999) {
      setRomanNumeral("Number out of range");
      return;
    }

    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].symbol;
        num -= romanNumerals[i].value;
      }
    }

    setRomanNumeral(result);
  };

  return (
    <div className="roman-decimal">
      <h1>Decimal to Roman Numeral Converter</h1>
      <label>Enter a decimal value:</label>
      <input
        type="text"
        value={decimalValue}
        onChange={(e) => setDecimalValue(e.target.value)}
        placeholder="e.g. 123"
      />
      <br />
      <br />
      <button className="roman-button" onClick={convertDecimalToRoman}>Convert</button>
      <br />
      {romanNumeral && <p>The Roman numeral equivalent is {romanNumeral}</p>}
    </div>
  );
}

export default DecimalToRoman;
