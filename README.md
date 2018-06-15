I can GET /api/stock-prices with form data containing a Nasdaq stock ticker and recieve back an object stockData.

In stockData, I can see the stock(string, the ticker), price(decimal in string format), and likes(int).

I can also pass along field like as true(boolean) to have my like added to the stock(s). Only 1 like per ip should be accepted.

If I pass along 2 stocks, the return object will be an array with both stock's info but instead of likes, it will display rel_likes(the difference betwwen the likes) on both.

Vantage Alpha Stock API was used to obtain api information.
