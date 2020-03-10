const fs = require('fs');       // node内置文件api

const KoaRouter = require('koa-router');
const koa = require('koa');
const app = new koa();
const router = new KoaRouter();

router.get('/', async(ctx, next) => {
    console.log('index');
    ctx.body = 'index'
})
app.use(router.routes());       // 添加路由中间件
app.use(router.allowedMethods());
// const main = ctx => {
//     // if (ctx.request.accepts('xml')) {
//     //     ctx.response.type = 'xml';      
//     //     ctx.response.body = '<data>Hello World</data>';     // 返回xml类型
//     //   } else if (ctx.request.accepts('json')) {
//     //     ctx.response.type = 'json';                     // 返回json类型
//     //     ctx.response.body = { data: 'Hello World' };
//     //   } else if (ctx.request.accepts('html')) {
//     //     ctx.response.type = 'html';                     // html 类型
//     //     ctx.response.body = '<p>Hello World</p>';
//     //   } else {
//     //     ctx.response.type = 'text';                         // 返回text/plain 类型
//     //     ctx.response.body = 'Hello World';
//     //   }
//     // ctx.response.type = 'html';
//     // ctx.response.body = fs.createReadStream('./templates/indexDemo.html');

//     // if (ctx.request.path !== '/') {              简单原生路由
//     //     ctx.response.type = 'xml';
//     //     ctx.response.body = '<data>hello world</data>'
//     // } else {
//     //     ctx.response.body = 'hello'
//     // }
// }

// app.use(main)

app.listen(3005)