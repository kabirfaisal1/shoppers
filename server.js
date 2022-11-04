//DECLARATIONS: path, express, session, handlebars
//sequelize, sequelizeStore ----------------------------
const path = require('path');
const express = require('express');

// // Import express-session
//const session = require('express-session');

// const helpers = require('./utils/helpers');
const routes = require('./controllers');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


//express middleware -------------------------
app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

//CONNECT TO MYSQL -----------------------------------
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});