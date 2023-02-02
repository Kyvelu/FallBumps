const {Panel} = require("@akarui/aoi.panel")

const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
	token: "MTA0Mjg4NDIyNjcyODYxMTkwMg.GtrG6R.Mq2yDXpPH4LREiQ_A5s8weJLzQkJ_JqotOBnbg",
	prefix: "fb!",
	intents: "all"
})

const panel = new Panel({
    username: "admin",
    password: "admin",
    secret: require('crypto').randomBytes(16).toString("hex"),
    port: 1370,
    bot: bot,
    mainFile: "index.js",
    commands: "./commands",
    interaction:"./interactions"
})
panel.loadPanel()

panel.onError()

bot.onMessage()

bot.readyCommand({
    channel: "1041900937473708112",
    code: `
$log[Ready On $userTag[$clientID]]
Bot Online! Ready On $userTag[$clientID]

$createApplicationCommand[global;help;FallBumps Help Menu;true]
$createApplicationCommand[global;bump;Bump Your Server;true]
`
})

bot.variables({
defaultimage: "https://i.imgur.com/l3e0qBv.jpg",
botinvite: "https://discord.com/oauth2/authorize?client_id=1042884226728611902&scope=bot&permissions=11273",
bumps: 0,
})

bot.status({
	text:"/help",
    type:"PLAYING"
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")
bot.onInteractionCreate()