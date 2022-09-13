import React, { useState, useEffect, useRef } from "react";

const Quote = () => {
  const [quotes, setQuotes] = useState("");
  const textRef = useRef();
  const colors = ["#90d000", "#ad5622", "#ea23ff", "#cc0f5d"];

  const getQuotes = () => {
    fetch("https://random-math-quote-api.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  };
  console.log(quotes);
  return <div>Quote</div>;
};

export default Quote;
