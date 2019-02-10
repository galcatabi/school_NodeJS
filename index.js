// Import packages
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/post.routes');
const bodyParser = require('body-parser');
// App
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
// Morgan
app.use(morgan('tiny'))

routes(app);
// First route
app.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})
// Starting server
app.listen('1337')