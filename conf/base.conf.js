exports.config = {
   runner: 'local',
   maxInstances: 5,

   specs: [
       './test/specs/**/*.js'
   ],

   exclude: [
   ],

   logLevel: 'info',
   bail: 0,
   baseUrl: 'http://localhost',
   waitforTimeout: 10000,
   connectionRetryTimeout: 90000,
   connectionRetryCount: 0,
   framework: 'mocha',
   reporters: ['spec'],
 
   mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
