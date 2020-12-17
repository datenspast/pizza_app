
# Vuetify Pizza app tutorial
Objective: Design and develop a simple, mobile friendly “shopping cart” style single page web application for the compilation of a pizza.
Requirements: VueCli installed. (https://cli.vuejs.org/)
Demo: https://pizza-coding-challenge.herokuapp.com/


## Create a new App and add dependencies

``` console
vue create pizza_app
```
Select the manual selection path and add "Router" and "Vuex" boxes.
For all other choices, the default is fine.

Add vuetify:

``` console
cd pizza_app
vue add vuetify
```

You can select the default option.
Ones the project is created commit the changes.

## Start the application
In the root direrctory, run:

``` console
yarn install
yarn serve
```
Opening http://localhost:8080/ should render the vuetify welcome screen.

## Prepare deployment to heroku
Since Vue is only a frontend library, the easiest way to host it and do things like serve up assets is to create a simple Express friendly script that Heroku can use to start a mini-web server. 

``` console
yarn add express
```

Add a new file `server.js` to the project root dir.

```js
// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
```

To test this run:

``` console
yarn build
```

Let’s test our server.js file locally by running it:
``` console
node server.js
```
Now go to http://localhost:5000 and make sure your app loads. This is the actual site Heroku will serve up.

Lastly, we’ll have to edit our start script in `package.json` to start our node server, as Heroku will automatically look for this script when looking for how to run a node.js app.

``` js
// package.json
{
 //...
 "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "start": "node server.js" <---- Add this line
  },
  //...

```

Commit the changes.


## Create a GitHub repository and push the project to it and deploy on Heroku

git remote add origin https://github.com/datenspast/pizza_app.git
git branch -M main
git push -u origin main

On Heroku connect the repository to the app and run manual or automatic deploys.

When you open the url of the app you should see the Vuetify welcome screen.

## Develop the app

### Landing page
Most of the following steps happen in the `src` folder of the app.

Look for a nice image for the landing page, e.g. here https://unsplash.com/images/food/pizza and dowload it into the `assets` folder.

Modify the `views/Home.vue` file to create a landing page.

