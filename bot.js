var config = {
  channels: ['#zeelbot'],
  server: '0.0.0.0',
  botName: 'zeelbot'
}

var irc = require('irc');
var util = require('util');

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});

bot.addListener('join#zeelbot', function(nick, message) {
  bot.say('#zeelbot', 'le zeelbot master race checking in');
});

bot.addListener('message', function(nick, to, text, message) {
  util.log(util.inspect(nick));
  util.log(util.inspect(to));
  util.log(util.inspect(text));
  util.log(util.inspect(message));
});
