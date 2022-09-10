let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
𝕭𝖔𝖙 ∅༢࿔ྀ
`
const templateButtons = [
    {index: 1, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 2, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
