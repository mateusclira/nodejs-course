const express = require('express')                  // import express module from the node_modules folder
const path = require('path')                        // import path module from the node_modules folder so we can set the views directory
const hoganMiddleware = require('hogan-middleware') // import hogan-middleware module from the node_modules folder so we can set the mustache template engine

const app = express()                                         // create express application server
app.set('views', path.join(__dirname,'views'))                // set the views directory to the views folder in the current directory
app.set('view engine', 'mustache')                            // set the view engine to mustache template engine
app.engine('mustache', hoganMiddleware.__express)             // set the mustache template engine to hogan-middleware
app.use(express.static(path.join(__dirname, 'public')))       // set the static files directory to the public folder in the current directory

                             // '/' is the path, here the home page is handling the function // req = request, res = response
// app.get('/', (req, res) => {
//     res.send('Hello World!') // send the response to the client with the message 'Hello World!'
// }) 

// app.get('/json', (req, res, next) => {
//     const data = {
//         greeting: 'Hello World!'                 They are all commented because we are using the index.js file from the routes folder
//     }
//     res.json(data)
// })

// app.get('/home', (req, res, next) => {
//     res.render('home', null)
// })

const index = require('./routes/index') // import the index.js file from the routes folder
app.use('/', index)                     // use the index.js file for the '/' path

app.listen(3000)                                          // listen to port 3000 // typically port 80 is used for http and port 443 is used for https
console.log('Server is running on http://localhost:3000') // print to the console that the server is listening on port 3000