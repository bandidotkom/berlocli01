// We’ll declare all our dependencies here
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const imageRoutes = require('./controllers/images');
const factRoutes = require('./controllers/fact');
const geofactRoutes = require('./controllers/geofact');
const activityRoutes = require('./controllers/activity');
//Declaring Port
const port = 3000;

//Initialize our app variable
const app = express();

//Connect to database
mongoose.connect('mongodb://bandidotkom:cukivagyok19771023@ds255455.mlab.com:55455/berlo');
//Middleware for CORS
app.use(cors());

//Middlewares for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/images', imageRoutes);
app.use('/activities', activityRoutes);
app.use('/fact', factRoutes);
app.use('/geofact', geofactRoutes);
app.get('/', (req,res) => {
   res.send("Invalid page");
})



//Listen to port 3000
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});
