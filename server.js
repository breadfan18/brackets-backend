const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 3001;

// Require the dotenv config
require('dotenv').config();

// Create the express app
const app = express();

// Connect to MongoDB with mongoogle
require('./config/database');

// create route variables
const picksRouter = require('./routes/index');

// mount middlewares
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/picks', picksRouter);

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});


