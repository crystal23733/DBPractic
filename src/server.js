const express = require('express');
const rootRouter = require('./routers/rootRouter.js');
const db = require('./db.js');
const morgan = require('morgan');

const PORT = 5500;

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use('/', rootRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})