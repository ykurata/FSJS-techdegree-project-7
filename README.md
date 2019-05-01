# React Gallery App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## Project Instructions

* Create your project
  * Use the create-react-app to set up and create your initial project directory.

* Build your app components
  * Use the index.html file and mockups as a general guide while you create the components of this project.
  * Use the src/App.js file as your main container component, where you should import your .config file.
  * Keep and manage as much of the state and functionality as possible in your src/App.js file, and pass data down to reusable stateless components with props.
  * Create the necessary stateless functional components that focus on the UI and receive data via props. Some examples of the stateless components you could use for your app are:
    * A Header component that could store things like an app title, logo, nav and search bar. Remember, the mockups and index.html file are a guide for how the main components should be laid out, arranged, and positioned, but you can personalize your app by adding things like a tittle, logo, footer, etc..
    * A Nav component for the navigation menu
    * A single Gallery component that can be reused to display the sets of images for each of the three topic categories you wish to display, like sunsets, waterfalls and rainbows, for example.
    * A single Gallery-item component that can be reused with iteration to display each list item and image.
      * Create a form component for the search. Since forms deal with a significant amount of unique information that can be very specific to the particular form being used, a stateless component might not be the best option. So feel free to manage the form-specific state in the form component rather than trying to keep you form stateless.

* Get a Flickr API key
  * Create yahoo account/use tumblr account to sign in.
  * Apply for a non-commercial API key.
  * You’ll need to set up a config.js file in your project that imports your API key into your application so that you and other users can request data from the Flickr API. This should be imported into src/App.js.
  * The config.js file should look something like this:
  const apiKey = 'YOUR API KEY';
  export default apiKey;
  * Import your API key into your application, preferably into src/App.js, and save it to a variable like you would any other module, and use the variable where applicable. That way, your app’s users will only need to enter in an API key once.
  * Important Note: This config.js file must be listed in the .gitignore file so it won’t be committed to your github repository. This will prevent your keys and tokens from getting posted publicly to GitHub. It is very important that you do NOT upload any of your personal API keys / secrets / passwords to Github or other publicly accessible place. When you submit this project for grading, your project reviewer will create their own config.js file and use their own API key to run the project.

* Routes
  * Install React Router and set up your <Route> and <Link> or <NavLink> components.
  * Include a "Search" link that includes a search field to let users search for photos.
  * Clicking a nav link should navigate the user to the correct route, displaying the appropriate info.
  * The current route should be reflected in the URL.
  8 Your app should display at least 3 default topic links that return a list of photos matching some criteria. For example: sunsets, waterfalls and rainbows.
  * It's okay to request and load the photos for the three default topics when the app first loads. Those default topic pages don't have to re-request and reload new data every time one of those pages are loaded.  

* Requesting the data
  * Fetch the data from the Flickr API using the Fetch API or a tool like Axios.
  * Make sure data fetching and state is managed by a higher-level “container” component, like src/App.js.
  * It is recommended the you use the following link for help with this part of the project, https://www.flickr.com/services/api/explore/flickr.photos.search.
    * Enter a tag to search for, such as “sunsets.”
    * You should also limit the number of results to 24 using the per_page argument.
    * Choose JSON as the output, then “Do not sign call.”
    * Click “Call Method...” At the bottom of the page, and you’ll see an example of the API call you’ll need to make. You can click on the URL to see what the response will look like.

* Search
  * Be sure to include a search field feature and a search route to search for new categories of images.

* Displaying the data
  * Make sure each image gets a unique "key" prop.
  * There should be no console warnings regarding unique "key" props.
  * The title of each page displaying images should be dynamically provided via "props".
  * The current route should be reflected in the URL.
  * There should be no more that 24 images displayed.  


## Extra Credit

* Add a loading indicator that displays each time the app fetches new data. Since the data for the three main topic pages can be requested when the page first loads, it's okay if the loading indicator is only present on the search route.

* If no matches are found by the search, display a friendly user message to tell the user there are no matches.

* Include a 404-like error route that displays a friendly 404 error page when a URL does not match an existing route.
