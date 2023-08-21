const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const path = require('path');

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.use(express.static(path.join(__dirname, 'client/build')));

// API routes and other Express configurations

// Catchall route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


// create a GET route
app.get('/', (req, res) => { //Line 9
  res.send({ express: 'CI/CD enabled :)' }); //Line 10
}); //Line 11