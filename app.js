const Koa = require('koa2');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
// 解析 post请求的body
const bodyParser = require('koa-bodyparser');
// 处理url
const controller = require('./controller');
// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
    // await next();
    // console.log('ctx', ctx)
// });

// add url-route:
// router.get('/hello/:name', async (ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });
//
// router.get('/', async (ctx, next) => {
//   ctx.response.body = `<h1>Index</h1>
//       <form action="/api/getList" method="post">
//           <p>Name: <input name="name" value="koa"></p>
//           <p>Password: <input name="password" type="password"></p>
//           <p><input type="submit" value="Submit"></p>
//       </form>`;
// });

// router.post('/api/getList', async (ctx, next) => {
//   var name = ctx.request.body.name || '',
//       password = ctx.request.body.password || '';
//   console.log(`signin with name: ${name}, password: ${password}`);
//   if (name === 'koa' && password === '12345') {
//       ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
//   } else {
//       ctx.response.body = `<h1>Login failed!</h1>
//       <p><a href="/">Try again</a></p>`;
//   }
// });


// addControllers(router);

// 解析body
app.use(bodyParser());

// add router middleware:
// app.use(router.routes());
app.use(controller());

// 在端口3000监听:
app.listen(3001);
console.log('app started at port 3001...');
