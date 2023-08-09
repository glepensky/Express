// Require express - gives us a function of express
const express = require('express');

// Create an instance of express by calling the function retuned above - gives us an object
const app = express();
const port = 5001;

// Express static file serving - public is the folder name
app.use(express.static('server/public'));

// Starts up our server
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})