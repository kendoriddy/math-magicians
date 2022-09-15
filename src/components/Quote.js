import React, { useState, useEffect, useRef } from "react";
import '../css/Quote.css';

const Quote = () => {
  const [quotes, setQuotes] = useState("");
  const textRef = useRef();
  const colors = ["#90d000", "#ad5622", "#ea23ff", "#cc0f5d", "#51abce", "#21edac"];

  const getQuotes = () => {
    fetch("https://random-math-quote-api.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    // textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)];
  }, [quotes]);
  return (
    <>
      <div className='quote-container'>
      <p ref={textRef}>{quotes.quote}</p>
      <p className='author'>{quotes.author}</p>
    <div className="buttons-div">
          <button className='buttons quote-btn' onClick={getQuotes}>Get Quotes</button>
          <a href={`https://twitter.com/intent/tweet?text=${quotes.quote}`} target='_blank'
            rel='noopener noreferrer'
          className='buttons'>Tweet</a>
        </div>
        </div>
    </>
  );
};

export default Quote;
