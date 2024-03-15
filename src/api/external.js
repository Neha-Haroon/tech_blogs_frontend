import axios from "axios";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const NEWS_API_ENDPOINT = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey==${NEWS_API_KEY}`;
// "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json";

const CRYPTO_API_ENDPOINT =
  "https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_UNiWgNUDu306dVYIZUIxO1MjVMiZar78znmHT01w";
// "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const CURRENCY_RATES_ENDPOINT = "";

export const getNews = async () => {
  let response;

  try {
    response = await axios.get(NEWS_API_ENDPOINT);

    response = response.data.articles.slice(0, 15);
  } catch (error) {}

  return response;
};

export const getCrypto = async () => {
  let response;

  try {
    response = await axios.get(CRYPTO_API_ENDPOINT);
    console.log("response", response);
    response = response.data;
    response = response.data;
    console.log(" new response", response);
    const keys = Object.keys(response);
    console.log(" new response keys", keys);
    console.log(" new response values", Object.values(response));
    const arrayOfObj = Object.entries(response).map((e) => ({
      [e[0]]: e[1],
    }));
    console.log("arrayOfObj", arrayOfObj);
    // response = arrayOfObj;
    response = Object.values(response);
    console.log("response", response);
  } catch (error) {}

  return response;
};
