Feature: Search the Web

    As a human
    I want to search the web
    So I can find information

    @watch
    Scenario: Search for github.com
        Given I have visited Google
        When I search for "github.com"
        Then I see "GitHub · Where software is built"