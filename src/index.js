const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
 
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//controller responsible for making the application crud
require('./controller/paymentController')(app)

//controller responsible for uploading to the application
require('./controller/uploadController')(app)

app.listen(process.env.PORT || 5000)