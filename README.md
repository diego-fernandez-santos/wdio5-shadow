# wdio5-shadow

This projects contains several samples for testing purposes of tests with shadow dom that you can run in different platforms and browsers.

### Getting Started

Clone this repository running the following command:
```
git clone https://github.com/diego-fernandez-santos/wdio5-shadow.git
```

Install node dependencies running the next command:
```
npm i
```

Set your cloud provider credentials, for example:
```
export SAUCE_ACCESS_USR=user
export SAUCE_ACCESS_KEY=xxxxxxx-d926-47ec-be31-4726f03f4c35

export BROWSERSTACK_ACCESS_USR=user
export BROWSERSTACK_ACCESS_KEY=xxXXxhhdUyXYPshXHiuQ
```

Run the tests using the wdio cli, for example:
```
npx wdio conf/wdio.sauce.legacy.conf.js
npx wdio conf/wdio.sauce.w3c.conf.js
npx wdio conf/wdio.sauce.appium.conf.js
npx wdio conf/wdio.browserstack.conf.js
```

If you want to run only with spec you have to add it in the command line, for example:
```
npx wdio conf/wdio.sauce.conf.js --spec ./test/specs/polymer.js 
npx wdio conf/wdio.sauce.conf.js --spec ./test/specs/google.js 
```

If you want to use chrome-driver first it all you have to install and run chrome driver and then run the tests:
```
wget -qO- https://chromedriver.storage.googleapis.com/77.0.3865.40/chromedriver_linux64.zip | bsdtar -xf- -C /tmp/
chmod +x /tmp/chromedriver
/tmp/chromedriver --port=4444
npx wdio conf/wdio.chromedriver.conf.js
```

If you want to use safari, run the following commands:
```
safaridriver -enabled
safaridriver --port=4444
npx wdio conf/wdio.safaridriver.conf.js
```
