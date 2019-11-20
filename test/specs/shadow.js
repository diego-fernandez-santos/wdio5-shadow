const assert = require('assert')

describe('Shop-button',_ => {
    let button;

    before(_ => {
       browser.url('https://shop.polymer-project.org/');
       browser.waitUntil(() => {
         return browser.$('shop-app')
           .shadow$('shop-home')
           .shadow$('.item:nth-child(4) shop-button a')
           .isExisting();
       });
       button = browser.$('shop-app')
         .shadow$('shop-home')
         .shadow$('.item:nth-child(4) shop-button a');

        // //another way to find shadow elements
        // button = browser.$(_ => {
        //     return document
        //       .querySelector('shop-app').shadowRoot
        //       .querySelector('shop-home').shadowRoot
        //       .querySelector('.item:nth-child(4) shop-button a');
        // });
    });

    beforeEach(_ => {
      browser.execute('window.scrollTo(0, 0);')
    });

    it('should be existing',_ => {
      assert.strictEqual(button.isExisting(), true);
    });

    it('should be enabled',_ => {
      assert.strictEqual(button.isEnabled(), true);
    });

    it('should not be selected',_ => {
      assert.strictEqual(button.isSelected(), false);
    });

    it('should not be focused',_ => {
      assert.strictEqual(button.isFocused(), false);
    });

    it('should not be clickable',_ => {
      button.scrollIntoView();
      assert.strictEqual(button.isClickable(), false);
    });

    it('should be displayed',_ => {
      assert.strictEqual(button.isDisplayed(), true);
    });

    it('should not be displayed in viewport',_ => {
      assert.strictEqual(button.isDisplayedInViewport(), false);
    });

    it('should have the text "SHOP NOW"',_ => {
      assert.strictEqual(button.getText().toUpperCase(), "SHOP NOW");
    });

    it('should have the href  "/list/mens_tshirts"',_ => {
      assert.strictEqual(button.getAttribute('href'),
        "https://shop.polymer-project.org/list/mens_tshirts");
    });

    it('should have a specific HTML',_ => {
      assert.strictEqual(button.getHTML(),
        `<a href="/list/mens_tshirts" aria-label="Men's T-Shirts Shop Now">Shop Now</a>`);
    });

    it('should have size',_ => {
      let size = button.getSize();
      assert.strictEqual(size.width > 0, true);
      assert.strictEqual(size.height > 0, true);
    });

    it('should have tagName property "A"',_ => {
      assert.strictEqual(button.getProperty('tagName').toUpperCase(), "A");
    });

    it('should have tagName "A"',_ => {
      assert.strictEqual(button.getTagName().toUpperCase(), "A");
    });

    it('should have font-size 14px',_ => {
      assert.strictEqual(button.getCSSProperty('font-size').value,
        "14px");
    });

    it('should be able to take a screenshot',_ => {
      button.saveScreenshot('./screenshot.png');
    });

    it('should be able to scroll into view',_ => {
      button.scrollIntoView();
      assert.strictEqual(button.isDisplayed(), true);
      assert.strictEqual(button.isDisplayedInViewport(), true);
    });

    it('should be able to perform an action',_ => {
      browser.releaseActions()
      browser.performActions([
             {
               "type": "key",
               "id": "keyboard",
               "actions": [
                 {"type": "keyDown", "value": "\uE009"},
                 {"type": "keyDown", "value": "s"},
                 {"type": "keyUp", "value": "\uE009"},
                 {"type": "keyUp", "value": "s"}
               ]
             }
       ]);
    });

    it('should be able to click it',_ => {
      button.scrollIntoView();
      button.click();
      assert.strictEqual(browser.getUrl(),
          'https://shop.polymer-project.org/list/mens_tshirts');
    })
})
