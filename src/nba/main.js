const dayjs = require('dayjs');

// 请求函数
const requestPage = require('../../util/requestPage');

let today = dayjs().format('YYYY-MM-DD');

const NBA_URL = `http://china.nba.cn/schedule/#!/${today}`;

requestPage.getPageApi(NBA_URL).then($ => {
  console.log('--------')
  console.log($('.upcomingGames'))
})
