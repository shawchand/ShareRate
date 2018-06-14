const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    passport = require('passport'),
    config = require('./config/DB');

    const app = express();
    app.use(express.static(path.join(__dirname, './client/dist/project')));

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
    var auth = require('./routes/auth');
    const adUnitRoutes = require('./routes/adunit.route');

    app.use(passport.initialize());
    app.use(bodyParser.json());
    app.use(cors());

    const port = process.env.PORT || 4000;

    app.use('/adunits', adUnitRoutes);
    app.use('/auth', auth);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });
