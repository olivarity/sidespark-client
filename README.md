*NOTE: This repository is kept open purely for reference and teaching purposes, development is suspended indefinitely. Feel free to use this code in any way you wish.*

# Sidespark Client
This is the front-end code for the Sidespark MVP. For server code, see scaasic/sidespark-server

## Getting Started
This project primarily makes use of React and Yan Zhu's [Spectre.css](https://github.com/picturepan2/spectre). To begin, run `yarn install` in **both** the project root and `/spectre`. `yarn start` hosts the app on a local dev server with hot reloads enabled for both JS and styles. `yarn build` compiles and bundles the React and SASS source for deployment.

## API
The app makes numerous API calls to a local `/api` route on the host. For local development, set a proxy location in `package.json`. See scaasic/sidespark-server for a sample implementation.
