import Data from "../public/data/Quotes.json";

type Quote = {
  text: string;
  author: string | null;
  likes: number;
  saves: number;
  id: number;
};

export function getQuoteByID(id: number): Quote {
  return Data[id];
}

export function getNumberOfQuotes(): number {
  return Data.length;
}
