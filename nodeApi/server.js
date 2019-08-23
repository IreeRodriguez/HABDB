const express = require('express'); 
const bodyParser = require('body-parser');
var cors = require('cors');


const app = express();

const port = 8000;


// app.listen(port, () => {  
//     console.log('We are live on ' + port);
// });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});app.listen(port, () => { 
     console.log('We are live on ' + port);
});