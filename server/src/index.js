const express = require('express');
const morgan = require('morgan');

const storeRoutes = require('./routes/store.routes');

const app = express();

app.use(morgan('dev'))
app.use(storeRoutes)

app.listen(4000) 
console.log('Server on port 4000')