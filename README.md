# About this code

Given a JSON file, it will pull in and display a series of items which can be "saved" and "un-saved"

Because of the state-based nature of the code display, whilst you could write it in pure JS / jQuery, it would be a fair bit of crazy plumbing. I chose to write this with plain vanilla Backbone (with Lodash for its compatibility and greatly improved performance), as Backbone is a pretty lightweight and I have the most familiarity with it.

This is the first project I've decided to use Gulp on vs Grunt, so the tooling for it may not be perfect or best practice yet, but it sure does a quick job of compiling / auto-prefixing the Sass code and JS.

It's built using Flexbox, Sass and BackboneJS. There's many ways it could be improved still.

## Browser support

This is designed to work with modern browsers; IE10 would be a minimum due to using Flexbox. Tested in IE11, Firefox, Safari, Chrome, iOS 9 Safari, Android Chrome.

## Future improvements

Some things off the top of my head:

* Don't rely on :hover states (and implement a proper :focus - I left out :focus due to some issues it was causing, but it's desirable to have for accessibilty). Implement the hover effects using script would allow for greater reliability, especially on touch devices.
* Consider using SVG instead of PNG for icons (there are also reasons to greatly prefer SVG over icon fonts, but I find that all methods have their pros and cons).
* Improve build in / out animations.
* Improve error handling of spurious data.
* Possibly consider having two API endpoints; one for property lists, the other for saved, so that the collections could more cleanly manage their own data structures vs using $.ajax(); and then splitting the result.