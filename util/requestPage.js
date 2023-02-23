const axios = require('axios');
const Cheerio = require('cheerio');


const getPageApi = function(url){
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      let $ = Cheerio.load(res.data);
      resolve($);
    })
  })
}

module.exports = {
  getPageApi
}