const fs = require("fs");
module.exports = {
  config:{
	name: "any imoji",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Apon", 
	description: "text any thing",
	category: "no prefix",
	usages: "any thing",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '🤦🏻‍♀️';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("🤖")==0) {
		var msg = {
			}
   const body = content.toLowerCase();
   if (api.sendMessage(any.thing) to api.setMessageReaction("🙃",
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
