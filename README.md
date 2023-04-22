# TourOfHeroesAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

WEBSITE: https://bitcoin-heroes.web.app/dashboard

## Setup

#### Setup Node 

    sudo apt install wget curl
    wget -q -O – https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add –
    source ~/.bashrc
    nvm list
    nvm install v14.21.3
    npm install -g @angular/cli
    npm install -g firebase-tools
    ng build --configuration production
    firebase login
    firebase init
       * during init:
         ** deploy uses 'dist/bitcoin-heroes' folder
         ** use 'Hosting: Configure files for Firebase Hosting' option
         ** say NO to index.html overwrites
    firebase deploy OR firebase deploy --only hosting

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
