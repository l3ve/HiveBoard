import Koa from 'koa';
import send from 'koa-send';
import bodyParser from 'koa-bodyparser';
import path from 'path';

import proxy from './proxy/proxy';
import router from './proxy/router';

const app = new Koa();
// 全局错误处理
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.body = err;
        ctx.status = err.status || 500;
    }
});

// body解析
app.use(bodyParser());

// 发送文件，如HTML
app.use(async (ctx, next) => {
    ctx.send = send;
    await next();
});

app.use(proxy());
// 路由
app.use(router.routes());

app.listen(process.env.PORT || 3344);
console.log(`Server up and running! On port ${process.env.PORT || 3344}!`);

//捕获异常
process.on('uncaughtException', function (err) {
    console.error('Unexpected exception: ' + err)
    console.error('Unexpected exception stack: ' + err.stack)
    // process.exit(1)
});