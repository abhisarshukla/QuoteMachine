import React, { FunctionComponent } from "react";

interface IProp {
  quote: string;
  author: string | null;
  nextQuoteFunctionHandler(): void;
  previousQuoteFunctionHandler(): void;
}

const Board: FunctionComponent<IProp> = ({
  quote,
  author,
  nextQuoteFunctionHandler,
  previousQuoteFunctionHandler,
}) => {
  return (
    <div className="flex f_column board">
      <div className="quote-box">
        <p id="quoteText">{quote}</p>
      </div>
      <div className="flex author">
        <p>{author ? `- ${author}` : `Anonymous`}</p>
      </div>
      <div className="flex controls">
        <button onClick={() => previousQuoteFunctionHandler()}>Prev</button>
        <button
          className="cbutton"
          id="copyBtn"
          data-clipboard-target="#quoteText"
          data-clipboard-action="copy"
        >
          Copy
        </button>
        <button onClick={() => nextQuoteFunctionHandler()}>Next</button>
      </div>
    </div>
  );
};

export default Board;
