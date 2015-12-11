function gulpConfig(){

	var root 	= "./";
	var client 	= root + "public/";
	var	server 	= root + "app.js";
	
	var config = {
		root: root,
		client: client,
		browserSyncFiles: [client + "**/*", server],
		browserSyncPort: 4000,
		nodeServerPort: 3000,
		server: server
	};

	return config;
}

module.exports = gulpConfig;