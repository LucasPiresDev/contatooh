exports.config = {    
    specs: ['../test/e2e/**/*.js'],
    onPrepare: function(){
        browser.get('http://localhost:3000/#/auth').then(function(){
            browser.driver.findElement(by.id('entrar')).click();
            browser.driver.findElement(by.id('login_field')).sendKeys('lucas_pires_online@yahoo.com.br');
            browser.driver.findElement(by.id('password')).sendKeys('User@010');
            browser.driver.findElement(by.name('commit')).click();
        });
    }
    
};