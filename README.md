# Flashcard Generator

## Pages
1 - Create Flashcard Page.

2 - My Flashcard Page.

3 - Flashcard Details Page.
  
## Libraries and Packages
1 - react-router-dom

2 - react-redux/redux-toolkit

3 - react-icons

4 - Formik

5 - Tailwind CSS

6 - daisyUI-Tailwind CSS Components

## Pages in brief
### 1 - Create Flashcard Page.
This page will create a particular flashcard and contain two forms. One for creating a flashcard group and the other for adding terms or cards to that flashcard group.
The main flashcard form has three feilds - Create Group (Title of flashcard Group), Image and Description.
The term form will also have three feilds - Enter Term (Title of card), Enter Definition and image. Image feild is not working right now.
      
### 2 - My Flashcard Page.
This page will display all group of flashcards, Its shows image on top, then name og group, then description and last it has two buttons -
1 - View Cards
This will navigate to Flashcard Details Page.
2 - Delete Icon
This will open model to delete group of flashcard which user click.
### 3 - Flashcard Details Page.
This page will have the layout as shown above. It must show the Flashcard title and description at the top.
The term in the flash card should be shown on the left side , and when a user clicks on a particular term, the details must be displayed in the center.
The center part i.e. the term details can also be shown as a carousel so that the user can navigate to other terms by clicking the arrow at the botton. On clicking the share button , a modal will open which will contain the link of that flashcard and copy icon(button). When user clicks the copy button , the link will be copied to clipboard and it will shown messege age "link copeid to clipboard".
Remainng two buttons not working right now.

## Folder Structure

![Screenshot (4)](https://user-images.githubusercontent.com/114158846/220156048-abf1df2e-8a4a-41bd-821e-463e26840112.png)



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
