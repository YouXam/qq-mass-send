const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()
const static = require('koa-static')
const app = new koa()


app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200
    } else {
        await next()
    }
})

app.use(bodyParser())

router.get('/status', async ctx => {
    ctx.body = {
        qq: config.account,
        nickname: client.nickname,
        status: client.status
    }
})

router.get('/friends', async ctx => {
    await client.reloadFriendList()
    ctx.body = Array.from(client.fl.values()).filter(f => f.user_id != config.account)
})


router.post('/send', async ctx => {
    const works = ctx.request.body.map(({ user_id, message }) => client.sendPrivateMsg(parseInt(user_id), message))
    const res = await Promise.allSettled(works)
    // await (async function sleep(n) {
    //     return new Promise(resolve => setTimeout(resolve, n))
    // })(2000);
    ctx.body = res.map((r, i) => {
        if (r.status == 'fulfilled') {
            return {
                user_id: ctx.request.body[i].user_id,
                message: ctx.request.body[i].message,
                status: 'ok',
                reason: '没有错误'
            }
        } else {
            return {
                user_id: ctx.request.body[i].user_id,
                message: ctx.request.body[i].message,
                status: 'error',
                reason: r.reason
            }
        }
    })
})

app.use(router.routes())


app.use(static(__dirname + '/dist'))

const config = {
    account: 0,
    platform: 2,
    port: 3000
}

process.argv.slice(2).forEach(arg => {
    if (arg.startsWith('--platform=')) {
        config.platform = parseInt(arg.slice(11))
    } else if (arg.startsWith('-p=')) {
        config.port = parseInt(arg.slice(3))
    } else if (arg.startsWith('-h') || arg.startsWith('--help')) {
        console.log('Usage: node index.js <account> --platform=<platform> -p=<port>')
        process.exit(0)
    } else {
        config.account = parseInt(arg)
    }
})

const { createClient } = require("oicq")
const client = createClient(config.account, { platform: config.platform })
client.on("system.online", () => {
    console.log("QQ bot logged in!")
    app.listen(config.port || 3000, () => {
        console.log("Server started at " + (config.port || 3000) + '.')
    })
})
client.on("system.login.qrcode", function (e) {
    process.stdin.once("data", () => {
        this.login()
    })
}).login()
