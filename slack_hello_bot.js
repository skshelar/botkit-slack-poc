var Botkit = require('botkit');

var controller = Botkit.slackbot();

var bot = controller.spawn({

    token: "xoxb-309898918064-rmYtB0ugNBkekkk4mT1fXAfn"

})

bot.startRTM(function(err,bot,payload) {

    if (err) {

    throw new Error('Could not connect to Slack');

}

});

controller.hears(["Hello","Hi"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {

    bot.reply(message,'Hello, how are you today?');

});
