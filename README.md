# URUIT Front End Test

### Implementation Details

I wanted to improve and to try an ambitious implementation that's why I choose to use [AngularJS Full-Stack Generator][1] even thought I didn't have that much experience using ES6, it is mean to show you that I'm capable of learning new methodologies quickly and that I understand the concepts behind complex generated structures.

**General**

* Build Systems: `Gulp`
* Testing: `Jasmine`

**Client**

* Scripts: `JavaScript (Babel)`
* Module Systems: `Webpack`
* Markup:  `HTML`
* Stylesheets: `Sass`
* Angular Routers:`ui-router`
* CSS Frameworks: `Angular Materials`

**Server**

* Scripts: `JavaScript (Babel)`
* Database: `MongoDB`

### Personal Notes

* I only tested one State (GameComponent) in the FE, this because of time, but I'm capable of performing multiples kinds of unit testing, I also had issues running Jasmine for the first time on the components and this consumed me bit of time.
* The BE api's are fully tested including integration test of every call.
* Developed and Tested on Google Chrome v59, Mac OS Sierra, 20h.
* Game Rules are dynamic, allowing the user to configure the moves and to add custom moves.
* TopList state loads the list grouped from the BE of the winners, for this in the BE I used a MongoDB Aggregation to group and return the counter of occurrences of every grouped winner.
* I have two models in the Data Base, Game and Rules, and I'm using Services to save and load the data from the games and rules.
* I'm sending a seed for the rules in the BE so the app can work properly.

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

[1]: https://github.com/angular-fullstack/generator-angular-fullstack
