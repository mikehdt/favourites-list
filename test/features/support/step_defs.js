module.exports = () => {

    // Cucumber, eh?

    this.Given(/^I have visited Google$/, () => {
        browser.url('http://google.com');
    });

    this.When(/^I search for "([^"]*)"$/, (searchTerm) => {
        browser.setValue('input[name="q"]', searchTerm);
        browser.keys(['Enter']);
    });

    this.Then(/^I see "([^"]*)"$/, (link) => {
        browser.waitForExist('a=' + link);
    });

}