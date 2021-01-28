/*
  Used if the quotes.json file does not contain likes, saves and id fields.
*/


import * as fs from "fs";

type Quote = {
  text: string;
  author: string;
  likes: number;
  saves: number;
  id: number;
}

fs.readFile("./quotes.json", 'utf-8',(err, data) => {
  const quotes: Quote[] = JSON.parse(data);
  let id = 0;
  for(const quote of quotes) {
    quote.saves = 0;
    quote.likes = 0;
    quote.id = id++;
  }
  const jsonString = JSON.stringify(quotes, undefined, ' ');
  fs.writeFile("./Quotes.json", jsonString, err => {
    if(err) {
      console.error(err);
    }
  })
});