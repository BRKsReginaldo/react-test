const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const permissions = require('./permissions');
const users = require('./users');
const bills = require('./bills');
const income = require('./income');

const appRouter = new Router()
    .use(async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        await next()
    })
    .get('/users', async ctx => {
        ctx.body = Object.values(users);
        ctx.status = 200
    })
    .get('/bills', async ctx => {
        ctx.body = bills;
        ctx.status = 200
    })
    .get('/income', async ctx => {
        ctx.body = income;
        ctx.status = 200
    })
    .get('/user', async ctx => {
        const id = ctx.query.id || 1;

        ctx.body = users[id];
        ctx.status = 200
    })
    .get('/user/permissions', async ctx => {
        const id = ctx.query.id || 1;

        ctx.body = permissions[id];
        ctx.status = 200
    });

module.exports = new Koa()
    .use(appRouter.routes())
    .listen(4000, () => console.log('[SERVER] listening on 4000'));