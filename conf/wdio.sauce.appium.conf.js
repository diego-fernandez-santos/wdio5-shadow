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
            browserName: 'Chrome',
            appiumVersion: '1.9.1',
            deviceName: 'Samsung Galaxy S9 WQHD GoogleAPI Emulator',
            deviceOrientation: 'portrait',
            platformVersion: '7.1',
            platformName: 'Android',
            "goog:chromeOptions": {"w3c": "true"}
        },
        {
            browserName: 'Safari',
            appiumVersion: '1.15.0',
            deviceName: 'iPhone 11 Pro Max Simulator',
            deviceOrientation: 'portrait',
            platformVersion: '13.0',
            platformName: 'iOS'
        },

   ],
});
