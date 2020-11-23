const express = require('express');
const mongoose = require('mongoose');
const departamentoRouter = require('./routes/departamentoRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongoDbConectionString', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    // CORS OPTIONS request, simply return 200
   next();
});
app.use(departamentoRouter);

app.listen(3001, () => { console.log('Server is running...') });