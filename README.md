A React app template written in Typescript with Redux store and OAuth 2.0. Does not require any server running. The authorization example in the template is for the [Spotify Web API](https://developer.spotify.com/documentation/web-api/) but can be used for any service with the same authorization flow.

Tutorial on Medium: [medium.com/@oskarasplin/create-a-react-app-with-typescript-redux-and-oauth-2-0-7f62d57890df](https://medium.com/@oskarasplin/create-a-react-app-with-typescript-redux-and-oauth-2-0-7f62d57890df)

### Use with Spotify
Register your app [here](https://developer.spotify.com/documentation/web-api) to retrieve a client ID and add http://localhost:3000 to Redirect URIs in the app settings.

### Use with other services
Edit the files in src/features/spotifyExample/ to fit your scenario. Or remove the example by removing `<SpotifyExample />` from App.tsx and `spotifyExample: spotifyExampleReducer` from store.ts.

## Try it out

1. Clone the repository
2. Navigate to the root directory of the repository
3. `npm install`
4. `cp .env.local_EXAMPLE .env.local` and fill `REACT_APP_SPOTIFY_CLIENT_ID` with your client id
5. `npm start`

### Template built with
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the official Typescript and Redux template: https://github.com/reduxjs/cra-template-redux-typescript

# Create React App standard build notes:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
