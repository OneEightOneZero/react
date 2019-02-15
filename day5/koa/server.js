const Koa = require('koa');
const app = new Koa();

// response
app.use((ctx) => {
  console.log(ctx.query.id)
  let id = ctx.query.id;
  id==1?ctx.body='正确的':ctx.body='错误的'
});

app.listen(3000);