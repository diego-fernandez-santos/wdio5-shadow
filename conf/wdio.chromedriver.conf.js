var baseConf= require('./base.conf.js');

exports.config = Object.assign(baseConf.config,
{
   path: '/',

   maxInstances: 1,
   capabilities: [
        {
            browserName: 'chrome',
        },
   ],
});
