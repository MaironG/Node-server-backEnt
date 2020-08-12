const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const morgan = require('morgan');
const connectMongo = require('connect-mongo');
const mongoose = require('mongoose');

// Initializations
const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({                                   //configuracion de handlebars
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'                                            //extencion de los archivos handlebars
  }));
  app.set('view engine', '.hbs');                               //establecer el motor de plantilla handlebars

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));                         //para los metodos delete y put en los formularios
app.use(session({
    secret: 'secret',                               //palabra secreta 
    resave: true,
    saveUninitialized: true
  }));

// routes

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });

// static files
module.exports = app;