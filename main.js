const DiscordRPC = require('discord-rpc');
const profile = require('./profile.json')
const ClientId = '387458498771812363';

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

async function setActivity() {
  if (!rpc)
    return;

  rpc.setActivity({
    details: profile.title,
    state: profile.quote,
	largeImageKey: profile.mediaLarge,
    largeImageText: profile.userLarge,
    smallImageKey: profile.mediaSmall,
    smallImageText: profile.userSmall,
    instance: false,
  });
}

rpc.on('ready', () => {
	setInterval(() => {
		setActivity();
	}, 15e3);
  console.log("ready");
});

rpc.login(ClientId).catch(console.error);
