import React, { FunctionComponent } from "react";

interface IProp {
  quote: string;
  likes: number;
  saves: number;
  nextQuoteFunctionHandler(): void;
  previousQuoteFunctionHandler(): void;
  likeQuoteFunctionHandler(): void;
  copyQuoteFunctionHandler(): void;
}

const Board: FunctionComponent<IProp> = ({
  quote,
  likes,
  saves,
  nextQuoteFunctionHandler,
  previousQuoteFunctionHandler,
  likeQuoteFunctionHandler,
  copyQuoteFunctionHandler,
}) => {
  return (
    <div className="flex f_column board">
      <div className="quote">{quote}</div>
      <div className="flex controls">
        <div className="flex lc-buttons">
          <button onClick={() => likeQuoteFunctionHandler()}>Like</button>
          <button onClick={() => copyQuoteFunctionHandler()}>Copy</button>
        </div>
        <div className="flex np-buttons">
          <button onClick={() => previousQuoteFunctionHandler()}>Prev</button>
          <button onClick={() => nextQuoteFunctionHandler()}>Next</button>
        </div>
        <div className="flex lc-dash">
          <span>{likes}</span>
          <span>{saves}</span>
        </div>
      </div>
    </div>
  );
};

export default Board;
