var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

//here is where you keep login and password
var credentials = require("./credentials.json");

console.log("Code started...");

nightmare
    .goto('https://www.packtpub.com/packt/offers/free-learning')
    .wait('#account-bar-login-register > a.login-popup')
    .click("#account-bar-login-register > a.login-popup")
    .type("#email", credentials.email)
    .type("#password", credentials.password)
    .click("form [type=submit]")
    .wait(4000)
    .wait("#deal-of-the-day > div > div > div.dotd-main-book-summary.float-left > div.dotd-main-book-form.cf > div.float-left.free-ebook > a")
    .click("#deal-of-the-day > div > div > div.dotd-main-book-summary.float-left > div.dotd-main-book-form.cf > div.float-left.free-ebook > a")
    .evaluate(function () {
        console.log("123");
        document.querySelector("#deal-of-the-day > div > div > div.dotd-main-book-summary.float-left > div.dotd-main-book-form.cf > div.float-left.free-ebook > a").click();
    })
    .end()
    .catch(function (error) {
        console.error('Failed:', error);
    });