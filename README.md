# Angular boilerplate

## Getting started

* Fork this repository and clone it
* Install [Node](https://nodejs.org/en/)
* Install [Bower](http://bower.io/) by running `npm install -g bower`
* Install [Gulp](http://gulpjs.com/) by running `npm install --global gulp`
* Go to the cloned repository folder and run `npm install` and `bower install`
* Start the development server by running `npm start`
  * Server will be running at [http://localhost:3000](http://localhost:3000)

## Workflow

All files are in the `public` folder. `public/index.html` file has the initial view. Script files are in the `public/app` folder. Application module is located in the `public/app/main.js` file. Example controller can be found in the `public/app/controller/todo-list.controller.js` file.

`gulpfile.js` has the [Gulp](http://gulpjs.com/) configuration. When you start developing your Angular application run `gulp serve`. After running the `serve` task, all script files in the `public/app` folder will be watched and when changed, script files will be minified into `public/dist/scripts.min.js` file.

## Tests

Tests can be executed by running `npm test`. `karma.conf.js` has the [Karma](http://karma-runner.github.io/0.13/index.html) configuration which loads `public/dist/scripts.js` file and `public/bower_components/angular/angular.min.js` file into the browser and runs the tests in `tests` folder. **Change this configuration when you add dependencies to your application**.

## Heroku deployment

* Install [Heroku toolbelt](https://toolbelt.heroku.com/)
* Go to the cloned repository folder and run `heroku login`
* Run `heroku create`
* Run `git push heroku master`
* Run `heroku open`
