// "Date","Price","Open","High","Low","Vol.","Change %"

const MAX_INDEXES_AMOUNT = 0;
const MAX_STOCK_PRICE = 0;
const MAX_LOSE_YEAR = 0;
const MAX_LOSE_MONTH = 0;

let data = require("./data/index.json");

console.log(data["cmcsa"]["categories"][0]);
