// const path = require('path');
const express = require('express');
const routes = require('./controllers');
// // Import express-session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers');
// const routes = require('./controllers');
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

//express middleware -------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
//CONNECT TO MYSQL
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

