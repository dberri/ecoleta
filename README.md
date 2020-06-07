# :recycle: Ecoleta

## :page_with_curl: About

Ecoleta is a web and mobile application to help people find pick up locations for recycling items.

This application was built following along the **Booster** track in the **Next Level Week** training workshop by [Rocketseat](https://rocketseat.com.br/). The focus of this workshop is to create an application that would go through the entire JavaScript stack (server, web and mobile) while also creating
a *real world application*.

## :wrench: Tech Stack

These are the main technologies used to create the application:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

## :rocket: How to use it

  - You will need **[Node.js](https://nodejs.org/en/)**, a package manager like **[NPM](https://www.npmjs.com/)**
  or **[Yarn](https://yarnpkg.com/)**. You can also install **[Expo](https://expo.io/)** if you want to check the mobile app
  in your own device.

1. Clone the repo:

```sh
  $ git clone https://github.com/dberri/ecoleta.git
```

2. Run the application:

```sh
  # Install server dependencies
  $ cd server
  $ yarn install

  ## Create the database
  $ yarn run knex:migrate
  $ yarn run knex:seed

  # Start the backend API
  $ yarn run dev

  # Install web dependencies
  $ cd web
  $ yarn install

  # Start the web application
  $ yarn start

  # Install mobile dependencies
  $ cd mobile
  $ yarn install

  # Start the mobile application
  $ yarn start
```

## :scroll: License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, David Berri