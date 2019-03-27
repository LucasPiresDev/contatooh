var config = require('./config')();
exports.config = {
    //sauceUser: config.sauceUser,
    sauceUser: 'lkpdev',
    //sauceKey: config.sauceKey,
    sauceKey: '0f9b8323-bb82-4d93-b3dc-3991cf46a7b3',
    capabilities : {
        'name' : config.sauceTestName,
        'browserName' : 'chrome',
        'tunel-identifier' : config.travisJobNumber,
        'build' : config.travisBuild
    },
    
    specs: ['../test/e2e/**/*Spec.js'],
    onPrepare: function(){
        browser.driver.get('http://localhost:3000/#/auth').then(function(){
            browser.driver.findElement(by.id('entrar')).click();
            browser.driver.findElement(by.id('login_field')).sendKeys('config.seleniumUser');
            browser.driver.findElement(by.id('password')).sendKeys('config.seleniumUserPassword');
            browser.driver.findElement(by.name('commit')).click();
        });
    }
}

    
