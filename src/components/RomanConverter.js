import React, { useState } from "react";
import "../css/RomanConverter.css";

const RomanConverter = () => {
  const [romanNumeral, setRomanNumeral] = useState("");
  const [decimalValue, setDecimalValue] = useState(null);
  const [invalidRomanNumeral, setInvalidRomanNumeral] = useState("");

  const romanNumerals = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  const convertRomanToDecimal = () => {
    let decimalValue = 0;

    // Check if the input contains any invalid characters
    const invalidChars = romanNumeral.replace(/[IVXLCDM]/g, "");
    if (invalidChars.length > 0) {
      setInvalidRomanNumeral(invalidChars);
      setDecimalValue(null);
      return;
    } else {
      setInvalidRomanNumeral("");
    }

    for (let i = 0; i < romanNumeral.length; i++) {
      const currentChar = romanNumeral[i];
      const nextChar = romanNumeral[i + 1];
      const currentValue = romanNumerals[currentChar];
      const nextValue = romanNumerals[nextChar];

      if (nextValue && currentValue < nextValue) {
        decimalValue -= currentValue;
      } else {
        decimalValue += currentValue;
      }
    }

    setDecimalValue(decimalValue);
  };
  return (
    <div className="roman-decimal">
      <h1>Roman Numeral to Decimal Converter</h1>
      <label>Enter a Roman numeral:</label>
      <input
        type="text"
        value={romanNumeral}
        onChange={(e) => setRomanNumeral(e.target.value.toUpperCase())}
        placeholder="e.g. IV"
      />
      <br />
      <br />
      <button className="roman-button" onClick={convertRomanToDecimal}>
        Convert
      </button>
      <br />
      {decimalValue !== null && (
        <p>
          The decimal value of {romanNumeral} is {decimalValue}
        </p>
      )}
      {invalidRomanNumeral !== "" && (
        <p className="error">
          Invalid Roman numeral: <span>{invalidRomanNumeral}</span>
          <br />
          Please enter valid Roman numerals only
        </p>
      )}
    </div>
  );
};

export default RomanConverter;
