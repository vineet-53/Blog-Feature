const express = require('express');
const router = require('./routers/index');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = 3000;
app.use(express.static('public'));
app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('layout', 'blog/layout');
app.use(router);
app.listen(process.env.PORT || PORT, (e) => {
  console.log('server started');
});
