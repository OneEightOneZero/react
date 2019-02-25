const https = require('https');
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
// response
app.use((ctx) => {
  console.log(ctx.query)
  console.log(ctx.body)
  console.log(ctx.request.body)
  let id = ctx.query.id;
  id == 1 ? ctx.response.body = '正确的' : ctx.body = '错误的'
});
// app.post('/post', async (ctx, next) => {
//   let postData = ctx.request.body;
//   ctx.response.body = {
//     status: 200,
//     msg: '这是post测试的返回数据',
//     data: postData
//   };
// });
app.listen(3000);
// https.createServer(app.callback()).listen(3001);