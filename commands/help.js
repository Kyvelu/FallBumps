module.exports = {
name: "help",
type: 'interaction',
prototype: 'slash',
$if: "v5",
code: `
$interactionReply[;
{newEmbed:
{title:FallBumps Help Menu}
{description:
<@$authorID> Welcome To The Help Menu.

Support Server: https://discord.gg/8V4MHdF3

**__SERVER OWNER SIDE__**
(Setting Up The Bot)

Just make sure the bot has send messages and create an instant invite permission and your all set!
}
{image:$getVar[defaultimage]}
{color:0000ff}
}
;;;;no]
`
}