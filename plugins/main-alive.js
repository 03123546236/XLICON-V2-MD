

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "./https://cdn.jsdelivr.net/gh/03123546236/XLICON-V2-MD@main/Assets/mp3/Alive.mp3"
    let url = "https://github.com/abrahamdw882"
    let murl = "https://chat.whatsapp.com/L54cslATpsMDO07ajwuqIc"
    let img = "https://telegra.ph/file/18f3f77a5793e6e02b5eb.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "THE XLICON-V2 IS ALIVE 🌟",
          body: "XLICON BOT",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/L54cslATpsMDO07ajwuqIc',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
