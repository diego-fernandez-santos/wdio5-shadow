var baseConf = require('./base.conf.js');

exports.config = Object.assign(baseConf.config,
{
   hostname: 'hub-cloud.browserstack.com',
   user: process.env.BROWSERSTACK_ACCESS_USR,
   key: process.env.BROWSERSTACK_ACCESS_KEY

   maxInstances: 1,

   capabilities: [
       {
            'browserName' : 'Chrome',
            'browser_version' : '62.0',
            'os' : 'Windows',
            'os_version' : '10',
            'resolution' : '1024x768',
            'browserstack.user' : process.env.BROWSERSTACK_ACCESS_USR,
            'browserstack.key' : process.env.BROWSERSTACK_ACCESS_KEY
            'browserstack.debug' : 'true'
        },
   ],
});
