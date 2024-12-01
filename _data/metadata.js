let data = {
	username: "jonoellis", // No leading @ here
	homeLabel: "tweets.ellis.scot",
	homeUrl: "https://tweets.ellis.scot/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;