var baseConf= require('./base.conf.js');

exports.config = Object.assign(baseConf.config,
{
   hostname: 'ondemand.saucelabs.com',
   sauceConnect: false,
   user: process.env.SAUCE_ACCESS_USR,
   key: process.env.SAUCE_ACCESS_KEY,
   services: ['sauce'],

   capabilities: [

        {
            browserName: 'chrome',
            "sauce:options": {
                username: process.env.SAUCE_ACCESS_USR,
                accesskey: process.env.SAUCE_ACCESS_KEY,
             },
            "goog:chromeOptions": {"w3c": "true"}
        },
        {
            browserName: 'safari',
            browserVersion: '13.0',
            platformName: 'macOS 10.13',
            "sauce:options": {
                username: process.env.SAUCE_ACCESS_USR,
                accesskey: process.env.SAUCE_ACCESS_KEY,
             },
        },
   ],
});
