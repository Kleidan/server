const app = require('./app.js');
var a = { asd: 'asd' };

app.App();

const rtn = setTimeout(() => {
  console.log('a:', a);
}, 3000);

clearTimeout(rtn)