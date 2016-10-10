import Router from 'koa-router'

const router = new Router({
    prefix: '/'
})

router.get('/', async (ctx)=> {
    // ctx.body = "3";
})

export default router