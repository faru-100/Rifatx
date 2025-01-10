module.exports = {
 config: {
	 name: "bal",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "bal") {
 return message.reply({
 body: " 「 𝐒𝐓𝐎𝐏\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗥𝗔𝗙𝗜𝗬𝗔𝗡 𝗥𝗜𝗙𝗔𝗧」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/2XtUVSr.mp4")
 });
 }
 }
}
