---
layout: post
title:  "Project goals"
date:   2016-02-22 19:40:45 +1100
categories: start
---

# Day 0 - The beginning

There is a lot of stuff to learn when it comes to modern JavaScript stacks. Here I am going to document my experiences in pulling together a NodeJS-based stack for serving a small single page app, integrating it with a TDD/BDD setup, writing an API to serve JSON data, writing the UI in possibly Backbone or React and having it all interface together. Also, it should leverage newer JS constructs such as those from ES2015. To top it off, I want to also consider dependency graph management, _possibly_ using WebPack, if that's justified... we'll see.

So I'm going to make mistakes. I'm going to break things. I'm going to write about it as I go along. I'm going to misunderstand / misuse things. But hopefully, at the end, I'll have something that's helped teach me (and maybe you?) a lot.

## Technology

So much is changing in the JS world, it's hard to keep up. Let's break down the parts.

### API

To keep things sane, the API is _not_ going to be backed by a database, instead relying on temporary JSON data kept only in temporary memory.

My expectation is to use ExpressJS. I'm going to pass on its spiritual sibling Koa because Express is what gets talked about more _for now_ and will be hopefully easier to find examples for.

### Behaviour Driven Testing

Test / behaviour driven development will encompass both unit tests and feature tests. This is probably where I'll make the most mistakes as it's something that I know _about_ but haven't much _used_. I want to test code. I want to make sure things work well end-to-end. I'm aware that humans should still be involved in testing and that you won't necessarily cover every single use case.

By describing things from a user's perspective, this hopefully will give us a clear goal of what to do, and then we can worry about the implementation details. It's not a good idea to write the code and then make up the story. That would be code driven development, obviously.

This is such a confusing as heck place to start though. Let's see what we have, and by no means an exhaustive list:

* Jasmine does unit tests, and is fairly "self contained". But is it falling out of favour?
* Mocha is popular, but only does a little. It's usually paired with Chai, maybe Chai-as-Promised, and SinonJS. But not necessarily! It's so extensible you can plug _other_ things in if you want! Do I want this? I don't know! Can't I just have a single, good stack rather than an infinitely pluggable one? I just want it to work.
* If you pick Mocha/Chai, which one of the _three_ test writing styles would you like to use? Assert (TDD), expect (BDD), should (BDD)?
* There's Istanbul for reporting on how much of your code is covered by units tests.
* There's Cucumber for writing feature tests (and doubtless many others!)
* What about Karma? It's often paired with Angular, and it includes its own webserver to run tests in too (from what I can tell)
* There's Jest, which seems to be React's preferred way of testing things?
* And then we have supporting things like Selenium, also packaged and improved a bit as WebdriverIO, NightwatchJS etc. etc.
* Online continuous integration services such as TravisCI also exist, but I'm going to pass them by for now

Selenium, used to control a "live" browser (such as Chrome or Firefox, or a headless one like PhantomJS) is a bit of a pain as it runs using Java. I've found in my research it can be quite flaky, but let's hope we can step past it. WebdriverIO seems like a nicer wrapper around Selenium that makes it a bit friendlier to use.

Frankly, I just wish it was easier in general to just be able to _pick things_. So as a first step, which one would you choose? It's not just a case of picking one, you have to mix them all for varying reasons.

I did find one setup which looks really promising: [https://github.com/xolvio/chimp](Chimp by Xolv.io). It combines Mocha/Chai and Cucumber together, and runs things using WebdriverIO. The devs seem quite active, which is always a plus.

...I might also just mention Supertest here as well, which seems to be good for testing API calls. Do I need to use it for that? Will one of those many previous packages do it, or is it needed?

### Framework

I have the most familiarity with Backbone/Marionette which are (at least in the former case) pretty "hands off". Marionette adds a bit more opinionated design to its systems, and adds some useful structural helpers. Plus Backbone Radio is kinda nice for talking between things.

I am tempted to look at using React though. I've been dabbling a little with it, and whilst it does things quite differently in places (JSX takes some getting used to!), it seems quite useful. Also, it's kinda _trendy_.

It might be that I end up doing both.

### Build system

I used to use Grunt, but it seems to be stalled for a long time, and it's slow. Thus I'm tossing up between Gulp and Webpack. In typical "plug everything into everything!" fashion, you can also use Webpack _with_ Gulp. And Webpack can run its own server too, or you could just use Express? Or maybe if we chose Karma we could use its server? Gah! Again, so many options!

I could just keep things simple and rely on ES2015's structure but reading about it, seems like it has some shortcomings? I'm not sure about going down an AMD/UMD route, and maybe not CommonJS. When HTTP/2 becomes commonplace, that might change best practice for packaging things? _Again,_ so many options!

### UI

This is easy. Sass (using libsass for speed, Ruby Sass used to have the features, but now it's at parity libsass is the superior option), and all my standard front end stuff. Autoprefixer, CSSnano, etc., I'm not really worried about this part of the setup.

## First steps

Given I'm most settled on ExpressJS, it probably makes sense to tackle the API first. I'd like to be able to get something done without being stalled/paralysed by indecision on some of the other technology choices. But let's keep them in the back of the mind whilst tackling the API.