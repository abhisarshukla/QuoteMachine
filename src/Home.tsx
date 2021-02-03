import React, { FunctionComponent, useState } from "react";
import ClipboardJS from "clipboard";
import Board from "./Board";
import { getQuoteByID, getNumberOfQuotes } from "./quote";

const Home: FunctionComponent = () => {
  new ClipboardJS("#copyBtn");
  const [id, setID] = useState(0);
  const nextQuoteFunction = () => {
    if (id + 1 >= getNumberOfQuotes()) setID(0);
    else setID((prev) => prev + 1);
  };
  const previousQuoteFunction = () => {
    if (id - 1 < 0) setID(getNumberOfQuotes() - 1);
    else setID((prev) => prev - 1);
  };
  const quote = getQuoteByID(id);
  const quoteText = quote.text;
  const quoteAuthor = quote.author;

  return (
    <Board
      quote={quoteText}
      author={quoteAuthor}
      nextQuoteFunctionHandler={nextQuoteFunction}
      previousQuoteFunctionHandler={previousQuoteFunction}
    />
  );
};

export default Home;
