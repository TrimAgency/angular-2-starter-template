# TrimNg2Starter

Angular starter template currently features: Angular 6, Jasmine for unit tests, Protractor for e2e tests, Angular CLI ^6.0.1 for dev environment, production builds and running tests.

Out of box features include: Login feature module, Request Interceptor that mutates request Authorization header with JWT, ResponseError Intereptor to handle 401 unauthorized responses from API, AuthService to set and retrieve JWT tokens from localStorage, Flex-box-grid and environment variable files.

## Prerequisites

Must have Node 8.0 or higher AND NPM v5.0 or higher; Yarn, angular CLI ^6.0.1
installed.

* [Install Yarn](https://yarnpkg.com/en/docs/install)
* `npm install -g @angular/cli` - To install the angular CLI

## First time use

Please set the Angular CLI to use yarn: `ng set --global packageManager=yarn`.
After cloning the repo, run `yarn install`.

Set env variables in the environment.ts, environment-staging.ts, and evnironment.prod.ts

Set the this.title in app.component.ts to your project name for document title.

## Adding 3rd Part Libraries

For css or scss files add path to .angular-cli.json "styles" array. For js dependencies add to package.json via `yarn add` [name of dependency] and add path of file to .angular-cli.json "scripts" array.  If @typings exist for library install via `yarn add @types\` [library name].  If @typings DO NOT exist add a typing for that library manually in the custom_typings.d.ts file. For example in the custom_typings.d.ts add `declare module 'typeless-package';` Then in your component or file, `import * as typelessPackage from 'typeless-package';`. For more information see https://github.com/angular/angular-cli/wiki/stories-third-party-lib.

## Development server

Run `ng serve` for dev server. Navigate to `http://localhost:4200/`. 
Optionaly you can use ng serve --port NUMBER.  Also you can serve any registered environment by ng serve --environment [ENVIRONMENT NAME]. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. For other environments use ng build --configuration [ENVIRONMENT NAME]. Note: additional environments must be registered in the angular.json file under "configurations".

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Heroku Deployment

* This starter app is Heroku deployment ready. Build environments are determined
  by the `NODE_ENV` system environment variable.  As such, please ensure that
  you set the appropriate Config Vars for your staging and production
  environments.
* Static assets will be served from `dist/` folder
* SSL is forced
