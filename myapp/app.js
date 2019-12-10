const express = require('express');
const app = express();

//设置路由
app.get('/', function (req, res) {
  res.send('Hello World! nodemon!');
});

//设置端口
const server = app.listen(3001, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://', host, port);
});