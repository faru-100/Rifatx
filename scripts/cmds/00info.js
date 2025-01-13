const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " ⸙𝗥𝗔𝗙𝗜𝗬𝗔𝗡 𝗥𝗜𝗙𝗔𝗧༉ ";
		const ownAge = "『 𝟭𝟵+ 』";
		const messenger = "𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝘂𝘄𝘂.𝗿𝗶𝗳𝘂𝘂";
		const authorFB = "𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝘂𝘄𝘂.𝗿𝗶𝗳𝘂𝘂";
		const authorNumber = "_0189xx8377*";
		const Status = "ღ𝐒𝐈𝐍𝐆𝐋𝐄༉";
		const urls = [
"https://i.imgur.com/dIyrQEJ.mp4",
"https://i.imgur.com/dIyrQEJ.mp4",
"https://i.imgur.com/dIyrQEJ.mp4",
"https://i.imgur.com/dIyrQEJ.mp4"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `ღ《 ⩸__𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧__⩸ 》⸙
\🤖BOT NAME : ⩸__${global.GoatBot.config.nickNameBot}__⩸
\👾BOT SYSTEM PREFIX : ${global.GoatBot.config.prefix}
\💙 OWNER NAME: ${authorName}
\📝AGE  : ${ownAge}
\💕RELATIONSHIP: ${Status}
\🌐WP : ${authorNumber}
\🌍 FACEBOOK LINK : ${authorFB}
\🗓DATE : ${date}
\⏰NOW TIME : ${time}
\🔰ANY HELP CONTACT :⩸__${messenger}__⩸
\📛BOT I'S RUNNING FOR : ${uptimeString}
    𝑻𝒈: 𝗨𝗻𝗸𝗻𝗼𝘄𝗻
    𝑰𝒏𝒔𝒕𝒂: 𝗨𝗻𝗸𝗻𝗼𝘄𝗻
    𝑪𝒂𝒑𝑪𝒖𝒕: 𝗨𝗻𝗸𝗻𝗼𝘄𝗻
    𝑻𝒊𝒌𝑻𝒐𝒌: 𝗨𝗻𝗸𝗻𝗼𝘄𝗻
    𝒀𝒐𝒖𝑻𝒖𝒃𝒆: 𝗨𝗻𝗸𝗻𝗼𝘄𝗻
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
