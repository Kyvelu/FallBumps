module.exports = {
name: "bump",
type: 'interaction',
prototype: 'slash',
$if: "v4",
code: `
$interactionReply[

$channelSendMessage[1052339090202312754;

$get[invite]
$let[invite;https://$get[b].$get[a]/$replaceText[$replaceText[$get[ok];';]; ;]]
$let[a;gg]
$let[b;discord]
$let[ok;$advancedTextSplit[$get[inv];:;3;,;1]]
$let[inv;$djsEval[message.channel.createInvite({maxAge:0,maxUses:0});yes]]

{newEmbed:
{title:$serverName Just Bumped!}
{description:
Bump: **$math[$getServerVar[bumps]+1]**
Owner: **$userTag[$ownerID]**
Server Members: **$membersCount Members**
Created At: **$creationDate[$guildID;date]**
}
{thumbnail:$serverIcon}
{image:$getVar[defaultimage]}
{color:0000ff}
}

$setServerVar[bumps;$math[$getServerVar[bumps]+1]]
;no]

;
{newEmbed:
{title:$serverName Bumped!}
{description:> **$serverName** Has Been Bumped!
> 🕒 Cooldown: **30m**
> Bump Number: **$math[$getServerVar[bumps]+1]**}
{thumbnail:$serverIcon}
{image:$getVar[defaultimage]}
{color:0000ff}
}
;{actionRow:
{button:Invite:5:$getVar[botinvite]}
{button:View Bumps:5:https\\://discord.gg/mArvEfmFyX}
}
;;;no]

$if[$authorID!=$botOwnerID]

$serverCooldown[30m;{
"content": "Please wait **%time%** to bump this server again.",
"options": {
"interaction": true
}
}]

$else

$endif

$suppressErrors[{
"content": "**404 Error** | An Error Had Occurred | Support: https://discord.gg/xTcFrV9rX9",
"options": {
"interaction": true
}
}]
`
}