// const path = require('path');
const express = require('express');
// // Import express-session
// const session = require('express-session');
// const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers');
// const routes = require('./controllers');


//CONNECT TO MYSQL
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});