require('dotenv').config();

const express = require('express');
const { join } = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const logger = require('morgan');

// const api = require('./api');

const app = express();

const PORT = process.env.PORT || 4200;
const DIST_FOLDER = join(process.cwd(), 'dist');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '100MB'
}));
app.use(logger('dev'));

if (process.env.NODE_ENV !== 'production') {

    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS,HEAD');
        // tslint:disable-next-line:max-line-length
        res.header(
            'Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Content-Type, Accept,X-Requested-With, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers'
        );

        if (req.method === 'OPTIONS') {
            return res.sendStatus(200);
        }
        return next();
    });

}

// app.use('/api', api);

app.use(express.static( join(DIST_FOLDER, 'frontend') ));
app.all('/*', (req, res) => {
    res.sendFile(`${ join(DIST_FOLDER, 'frontend') }/index.html`);
});

app.listen(process.env.PORT || 4200, () => console.log( 'Listening on port ' + (process.env.PORT || 4200) ));
