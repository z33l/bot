var config = {
  channels: ['#zeelbot'],
  server: '0.0.0.0',
  botName: 'zeelbot'
}

var irc = require('irc');

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});

bot.addListener('join#zeelbot', function(nick, message) {
  bot.say('#zeelbot', 'le zeelbot master race checking in');
});

bot.addListener('join#zeelbot', function(nick, message) {
  bot.say('#zeelbot', 'sup ' + nick + '?');
});

