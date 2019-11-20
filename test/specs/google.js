const assert = require('assert')

describe('google page', () => {
    it('should search hola mundo', () => {
        browser.url('https://www.google.es');
        let input = browser.$('input[name="q"]');
        input.setValue("Hola mundo");
        browser.keys('Enter');
    })
})
