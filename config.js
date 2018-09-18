const config = {
    DEV : {
        mongodbUrl: "ds261072.mlab.com:61072/aw_users",
        mongodbUser: "rashmihp",
        mongodbPass: "abc@123",
        port: "3000"
    },
    PROD : {
        mongodbUrl: "ds159274.mlab.com:59274/jokes",
        mongodbUser: "app",
        mongodbPass: "general",
        port: "3000"
    }
}

const env = (process.env.ENV) ? process.env.ENV : 'DEV';
module.exports = config[env];
