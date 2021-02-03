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
    <div className="box">
      <div className="box__quote">
        <p id="quoteText" className="quote">
          {quote}
        </p>
        <p className="author">{author ? `- ${author}` : `Anonymous`}</p>
      </div>
      <button
        className="box__copy-btn"
        id="copyBtn"
        data-clipboard-target="#quoteText"
        data-clipboard-action="copy"
      ></button>
      <div className="box__controls">
        <button
          className="box__controls__btn"
          onClick={() => previousQuoteFunctionHandler()}
        >
          Prev
        </button>
        <button
          className="box__controls__btn"
          onClick={() => nextQuoteFunctionHandler()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Board;
