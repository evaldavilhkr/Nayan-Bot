const fs = require("fs");
module.exports = {
  config:{
	name: "🤖",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "🤖",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("🤖")==0) {
		var msg = {
				body: "আপন বস কে খুজতেছেন নাকি🙃🙃",
				body: "আপন বসকে ডিসটার্ব করলে ঠ্যাং ভাইঙ্গালাইমু😡😡",
				body: "আপন বস বিজি আছে কিছু বলবেন",
				body: "আপন বস পরে কথা বলবে",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
