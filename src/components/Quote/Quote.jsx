import axios from "axios";
import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState({ content: "", author: "" });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://api.quotable.io/random");
        const { content, author } = response.data;
        setQuote({ content, author });
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();

    const interval = setInterval(fetchQuote, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20 text-3xl dark:text-white ">
      <h1>Wisdom Drops</h1>
      <p className="mt-10 font-extralight text-2xl">{quote.content}</p>
      <p className="font-extralight text-sm ">{quote.author}</p>
    </div>
  );
};

export default Quotes;
