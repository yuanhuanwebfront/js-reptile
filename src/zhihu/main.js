// const axios = require('axios');
// const Cheerio = require('cheerio');

// const url = 'http://www.baidu.com';

// axios.get(url).then(res => {
//   let $ = Cheerio.load(res.data);

//   let arr = [];

//   $('.title-content-title').each((idx, item) => {
    
//     let text = `${idx + 1}. ${$(item).text()}`
    
//     arr.push(text);
//   })

//   console.log(arr)
//   // console.log(Cheerio.load(res.data));
// })

const requestPage = require('../../util/requestPage');

const ZH_URL = 'https://www.zhihu.com/hot';

requestPage.getPageApi(ZH_URL).then($ => {
  console.log('--------')
  console.log($.html())
  $('.HotItem-title').each(item => {
    console.log(item)
  })


})
