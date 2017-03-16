# TrimNg2Starter

Angular 2 starter template currently features: Angular 4, Jasmine for unit tests, Protractor for e2e tests, Angular CLI for dev environment, production builds and running tests.

## Prerequisites

Must have Node 6.9.0 or higher AND NPM v3.0 or higher.
Yarn installed. To install yarn: https://yarnpkg.com/en/docs/install.
Angular CLI installed. To install the angular CLI: npm install -g @angular/cli.

## First time use

Please set the Angular CLI to use yarn: ng set —global packageManager=yarn.
After cloning the repo run yarn install.

## Development server

Run `ng serve` for dev server. Navigate to `http://localhost:4200/`. 
Optionaly you can use ng serve --port NUMBER.  Also you can serve any registered environment by ng serve --environment [ENVIRONMENT NAME]. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. For other environments use ng build --environment [ENVIRONMENT NAME]. Note: additional environments must be registered in the .angular-cli.json file under "environments".

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
