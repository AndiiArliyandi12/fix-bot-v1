/*let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
┌–––––––––––––––––✥
│「▰▰▰▱▱▱▱▱▱▱」
└┬❖ 「 Kartu Intro 」
┌┤❀  ɴᴀᴍᴀ :
┊│❀  ᴋᴏᴛᴀ : 
┊│❀  ᴡᴀʀɴᴀ ʙʜ ʏᴀɴɢ ᴅɪ ᴘᴀᴋᴀɪ :
│└────────────┈
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler */

import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `┌–––––––––––––––––✥
│「▰▰▰▱▱▱▱▱▱▱」
└┬❖ 「 Kartu Intro 」
┌┤❀  ɴᴀᴍᴀ :
┊│❀  ᴋᴏᴛᴀ : 
┊│❀  ᴡᴀʀɴᴀ ʙʜ ʏᴀɴɢ ᴅɪ ᴘᴀᴋᴀɪ :
│└────────────┈
`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'MENU','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://chat.whatsapp.com/EjczE2AmL7qHnpPbs8d74b",
    mediaType: "VIDEO",
    description: "https://chat.whatsapp.com/EjczE2AmL7qHnpPbs8d74b", 
    title: '𝕭𝖔𝖙 ∅༢࿔ྀ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler

