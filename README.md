# Search Saver

Search Saver is MERN Stack CRUD Web Application right now, but the plan is if I can find more free time to do it MEAN and MEVN app too and also I want to dive into Svelte so it can be MESN I suppose :)
 If you have some good search API feel free to contact me I will be glade to include more search options in this app right now I search the [standart search API](https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets) from Twitter.
 
 ## NOTE
 >> For some reason Materialize JS is acting strange, so after you login make sure to click the FAB button to initialize Materialize JS after that is no problem you can use the app with limited functionality, my TODO list is full but right now I don't have the time that I need to fix everything and to create all the functionality
 
 > NodeJS App depends on:
 > 
 > `bcryptjs`: '2.4.3', [npm docs](https://www.npmjs.com/package/bcryptjs)
 > 
 > `express`: '4.17.1',   [npm docs](https://www.npmjs.com/package/express)
 > 
 > `express-validator`: '6.2.0',   [npm docs](https://www.npmjs.com/package/express-validator)
 > 
 > `config`: '3.2.2',  [npm docs](https://www.npmjs.com/package/config)
 > 
 > `jsonwebtoken`: '8.5.1',  [npm docs](https://www.npmjs.com/package/jsonwebtoken)
 > 
 >  `mongoose`: '5.7.1',   [npm docs](https://www.npmjs.com/package/mongoose)
 >  
 > `twitter`: '1.7.1'  [npm docs](https://www.npmjs.com/package/twitter)
 > 
 > Development of NodeJS depends on: 
 > 
 > `chalk`: '2.4.2'   [npm docs](https://www.npmjs.com/package/chalk)
 > 
 > `concurrently`: '4.1.2'   [npm docs](https://www.npmjs.com/package/concurrently)
 > 
 > `nodemon`: '1.19.2'   [npm docs](https://www.npmjs.com/package/nodemon)
 
 
 > React App depends on:
 > 
 > `react-router-dom`: '5.1.0', [npm docs](https://www.npmjs.com/package/react-router-dom)
 > 
 > `axios`: '0.19.0', [npm docs](https://www.npmjs.com/package/axios)
 > 
 > `materialize-css`: '1.0.0', [npm docs](https://www.npmjs.com/package/materialize-css)
 > 
 > `redux`: '4.0.4', [npm docs](https://www.npmjs.com/package/redux)
 > 
 > `react-redux`: '0.19.0', [npm docs](https://www.npmjs.com/package/react-redux)
 > 
 > `redux-thunk`: '2.3.0', [npm docs](https://www.npmjs.com/package/redux-thunk)
 > 
 > `redux-devtools-extension`: '2.13.8', [npm docs](https://www.npmjs.com/package/redux-devtools-extension)
 
 
 # GIT clone and installation (only for the first start)
In the location that you want to clone the repo point your terminal to that location and type:
1. `git clone https://github.com/AdiHasani/Search-Saver` then
2. `cd Search-Saver` then
3. `npm i` (this will install NodeJs dependencies and devDependencies) 
4. `cd react-app` then  `npm i` (For some reason script `npm run dev:init` dosnt install correctly Reacts dependencies if you have any sugestion why contact me. If I can fix it then step 3 and 4 will be merged in one without need to change directory to install dependencies)


## Development server

Run `npm run dev` (make sure that you are in the Search-Saver directory) for a dev server that runs on port 4000 if you want to change the port you can do it in the `server.js` file in the root directory. The app will automatically reload if you change any of the source files.
Default port is 3000 for the React APP. You can manualy open it by typing `http://localhost:3000/` in the browser. If you want to change the port depends on your enviorment but you can do it at react-app package.json by changing react script:

from: `"react": "react-scripts start",`

to: `"react": "PORT=XXXX react-scripts start",`

if this dosnt work for you try to create `.env.local` file in the react-app folder
````
`.env.local`

PORT=XXXX
````
*XXXX is number that you are choosing

## Tests
I will do my best to write integration tests and unit tests for this app as soon us I get free time. 

## NodeJS and other References if you need

The official [MongoDB Docs](https://docs.mongodb.com/).

The official [Express Docs](https://expressjs.com/en/starter/installing.html).

The official [React Docs](https://reactjs.org/docs/hello-world.html).

The official [NodeJS Docs](https://nodejs.org/en/docs/).
