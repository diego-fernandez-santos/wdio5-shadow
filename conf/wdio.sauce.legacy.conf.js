var baseConf= require('./base.conf.js');

exports.config = Object.assign(baseConf.config,
{
   hostname: 'ondemand.saucelabs.com',
   user: process.env.SAUCE_ACCESS_USR, 
   key: process.env.SAUCE_ACCESS_KEY,
   sauceConnect: false,
   services: ['sauce'],

   capabilities: [
        {
            browserName: 'chrome',
            platform: 'Windows 10',
            version: '78.0',
        },
        {
            browserName: 'safari',
            platform: 'macOS 10.13',
            version: '13.0',
        },
   ],
});
