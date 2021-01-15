/* Empty JS object to act as endpoint for all routes */
let projectData={}

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
//const { response } = require('express');
app.use(cors());


/* Initializing the main project folder */
app.use(express.static('website'));

const port = 8000;

// TODO-Spin up the server
const server =app.listen(port,listening);
function listening(){
    console.log('server running');
    console.log(`running on localhost:${port}`);
};


// GET route
app.get('/all', sendData);

function sendData (req, res) {
  res.send(projectData);
};

// Post route
app.post('/adddata', adddata);

function adddata(req,res){

  newEntry = {
    temp: req.body.temp,
    date: req.body.date,
    feelings: req.body.feelings
  }

  projectData=newEntry;
  res.send(projectData)
};





