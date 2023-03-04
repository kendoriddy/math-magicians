import React, { useState } from "react";
import "../css/RomanConverter.css";
import DecimalToRoman from "./DecToRoman";
import RomanToDec from "./RomanToDec";

const RomanConverter = () => {
  return (
    <>
    <RomanToDec />
    <DecimalToRoman />
    </>
  );
};

export default RomanConverter;
