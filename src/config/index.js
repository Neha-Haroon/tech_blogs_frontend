const dotenv = require("dotenv").config();

const REACT_APP_INTERNAL_API_PATH = process.env.REACT_APP_INTERNAL_API_PATH;
const REACT_APP_NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

module.exports = {
  REACT_APP_INTERNAL_API_PATH,
  REACT_APP_NEWS_API_KEY,
};
